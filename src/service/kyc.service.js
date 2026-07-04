import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";
import S3Service from "../utils/S3Service.utils.js";

class KycService {
  // CREATE
  static async create(payload, actor, files) {
    const userExists = await prisma.user.findUnique({
      where: {
        id: payload.userId,
      },
    });

    if (!userExists) {
      throw ApiError.badRequest("User not found");
    }

    const existing = await prisma.kyc.findUnique({
      where: {
        userId: payload.userId,
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

    return prisma.kyc.create({
      data: {
        registrationNumber: payload.registrationNumber,
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
            id: payload.userId,
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
  static async update(id, payload) {
    const exists = await prisma.kyc.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("KYC not found");
    }

    return prisma.kyc.update({
      where: { id },

      data: payload,

      include: {
        addresses: true,

        documents: true,
      },
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
