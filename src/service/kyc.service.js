import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";
import HelperUtils from "../utils/helper.utils.js";
import S3Service from "../utils/S3Service.utils.js";

class KycService {
  // CREATE
  static async create(payload, actor, files) {
    const userExists = await prisma.user.findUnique({
      where: {
        id: actor.id,
      },
    });

    if (!userExists) {
      throw ApiError.badRequest("User not found");
    }

    const existing = await prisma.kyc.findUnique({
      where: {
        userId: userExists.id,
      },
    });

    if (existing) {
      throw ApiError.conflict("KYC already exists");
    }

    let uploadedDocuments = [];

    // FILE UPLOAD
    if (files?.documents && files.documents.length) {
      for (let i = 0; i < files.documents.length; i++) {
        const file = files.documents[i];
        const bodyDocument = payload.documents?.[i];
        const fileUrl = await S3Service.upload(file.path, "kyc");
        uploadedDocuments.push({
          type: bodyDocument?.type,
          documentNumber: bodyDocument?.documentNumber,
          remarks: bodyDocument?.remarks,
          fileUrl,
        });
      }
    }

    const registrationNumber = await String(HelperUtils.random(6));

    return prisma.kyc.create({
      data: {
        registrationNumber,
        fullName: payload.fullName,
        dob: payload.dob,
        gender: payload.gender,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        companyName: payload.companyName,
        businessType: payload.businessType,
        kycType: payload.kycType,
        remarks: payload.remarks,
        metadata: payload.metadata,

        user: {
          connect: {
            id: userExists.id,
          },
        },

        addresses: payload.addresses
          ? {
              create: payload.addresses,
            }
          : undefined,

        documents: uploadedDocuments.length
          ? {
              create: uploadedDocuments,
            }
          : undefined,
      },

      include: {
        addresses: true,

        documents: true,
      },
    });
  }

  // UPDATE
  static async update(id, payload, actor, files) {
    const exists = await prisma.kyc.findUnique({
      where: { id },
      include: {
        addresses: true,
        documents: true,
      },
    });

    if (!exists) {
      throw ApiError.notFound("KYC not found");
    }

    const {
      addresses = [],
      documents = [],
      status,
      rejectionReason,
      ...kycData
    } = payload;

    // Only SUPER_ADMIN can change status manually
    if (status !== undefined && actor.role !== "SUPER_ADMIN") {
      throw ApiError.forbidden("Only Super Admin can update KYC status");
    }

    if (status === "REJECTED" && !rejectionReason) {
      throw ApiError.badRequest(
        "Rejection Reason is required when rejecting KYC"
      );
    }

    // API Holder resubmits rejected KYC
    if (actor.role === "API_HOLDER") {
      if (exists.status === "REJECTED") {
        kycData.status = "PENDING";
        kycData.rejectionReason = null;
      }
    } else if (actor.role === "SUPER_ADMIN") {
      if (status !== undefined) {
        kycData.status = status;
        kycData.rejectionReason = rejectionReason ?? null;
      }
    }

    return prisma.$transaction(async (tx) => {
      // ---------------- UPDATE KYC ----------------

      const updatedKyc = await tx.kyc.update({
        where: { id },
        data: {
          ...kycData,
          metadata:
            typeof kycData.metadata === "string"
              ? JSON.parse(kycData.metadata)
              : kycData.metadata,
        },
      });

      // ---------------- UPDATE ADDRESSES ----------------

      for (const bodyAddress of addresses) {
        const existingAddress = exists.addresses.find(
          (a) => a.type === bodyAddress.type
        );

        if (existingAddress) {
          await tx.address.update({
            where: {
              id: existingAddress.id,
            },
            data: {
              address: bodyAddress.address,
              pinCode: bodyAddress.pinCode,
              state: bodyAddress.state,
              city: bodyAddress.city,
              landmark: bodyAddress.landmark,
            },
          });
        } else {
          await tx.address.create({
            data: {
              kycId: id,
              ...bodyAddress,
            },
          });
        }
      }

      // ---------------- UPDATE DOCUMENTS ----------------

      const uploadedFiles = files?.documents || [];

      for (let i = 0; i < documents.length; i++) {
        const bodyDoc = documents[i];

        const existingDoc = exists.documents.find(
          (d) => d.type === bodyDoc.type
        );

        let fileUrl = existingDoc?.fileUrl || bodyDoc.fileUrl || null;

        const uploadedFile = uploadedFiles[i];

        // New file uploaded
        if (uploadedFile) {
          // Delete old S3 file
          if (existingDoc?.fileUrl) {
            await S3Service.delete({
              fileUrl: existingDoc.fileUrl,
            });
          }

          // Upload new file
          fileUrl = await S3Service.upload(uploadedFile.path, "kyc");
        }

        if (existingDoc) {
          await tx.kycDocument.update({
            where: {
              id: existingDoc.id,
            },
            data: {
              documentNumber: bodyDoc.documentNumber,
              remarks: bodyDoc.remarks,
              fileUrl,
            },
          });
        } else {
          await tx.kycDocument.create({
            data: {
              kycId: id,
              type: bodyDoc.type,
              documentNumber: bodyDoc.documentNumber,
              remarks: bodyDoc.remarks,
              fileUrl,
            },
          });
        }
      }

      // ---------------- UPDATE USER & DOCUMENT VERIFY STATUS ----------------

      if (updatedKyc.status === "VERIFIED") {
        // User KYC Verified
        await tx.user.update({
          where: {
            id: exists.userId,
          },
          data: {
            isKycVerified: true,
          },
        });

        // All Documents Verified
        await tx.kycDocument.updateMany({
          where: {
            kycId: id,
          },
          data: {
            isVerified: true,
          },
        });
      }

      if (updatedKyc.status === "PENDING" || updatedKyc.status === "REJECTED") {
        // User KYC Not Verified
        await tx.user.update({
          where: {
            id: exists.userId,
          },
          data: {
            isKycVerified: false,
          },
        });

        // All Documents Not Verified
        await tx.kycDocument.updateMany({
          where: {
            kycId: id,
          },
          data: {
            isVerified: false,
          },
        });
      }

      return tx.kyc.findUnique({
        where: { id },
        include: {
          addresses: true,
          documents: true,
        },
      });
    });
  }

  // GET ALL
  static async getAll({ page = 1, limit = 10, status, search }) {
    const skip = (Number(page) - 1) * Number(limit);

    const where = {
      ...(status && {
        status,
      }),

      ...(search && {
        OR: [
          {
            fullName: {
              contains: search,
            },
          },

          {
            companyName: {
              contains: search,
            },
          },

          {
            registrationNumber: {
              contains: search,
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.kyc.findMany({
        where,
        skip,
        take: Number(limit),
        include: {
          addresses: true,
          documents: true,
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
              phoneNumber: true,
            },
          },
        },

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.kyc.count({
        where,
      }),
    ]);

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  static async getById(id) {
    const kyc = await prisma.kyc.findUnique({
      where: { id },
      include: {
        addresses: true,
        documents: true,
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phoneNumber: true,
            registrationNumber: true,
          },
        },
      },
    });

    if (!kyc) {
      throw ApiError.notFound("KYC not found");
    }

    return kyc;
  }

  // DELETE
  static async delete(id) {
    const exists = await prisma.kyc.findUnique({
      where: { id },

      include: {
        documents: true,
      },
    });

    if (!exists) {
      throw ApiError.notFound("KYC not found");
    }

    // DELETE FILES
    for (const doc of exists.documents) {
      await S3Service.delete({
        fileUrl: doc.fileUrl,
      });
    }

    return prisma.kyc.delete({
      where: { id },
    });
  }
}

export default KycService;
