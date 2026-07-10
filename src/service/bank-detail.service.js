import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";
import S3Service from "../utils/S3Service.utils.js";

class BankDetailService {
  // CREATE
  static async create(payload, file, user) {
    const userExists = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!userExists) {
      throw ApiError.badRequest("User not found");
    }

    const exists = await prisma.bankDetail.findUnique({
      where: {
        accountNumber: payload.accountNumber,
      },
    });

    if (exists) {
      throw ApiError.conflict("Bank account already exists");
    }

    let bankProofFile = null;

    if (file) {
      bankProofFile = await S3Service.upload(file.path, "bank-details");
    }

    // PRIMARY HANDLE
    if (payload.isPrimary) {
      await prisma.bankDetail.updateMany({
        where: {
          userId: user.id,
        },

        data: {
          isPrimary: false,
        },
      });
    }

    return prisma.bankDetail.create({
      data: {
        userId: user.id,

        accountHolder: payload.accountHolder,

        accountNumber: payload.accountNumber,

        phoneNumber: payload.phoneNumber,

        accountType: payload.accountType,

        ifscCode: payload.ifscCode,

        bankName: payload.bankName,

        isPrimary: payload.isPrimary ?? false,

        bankProofFile,
      },
    });
  }

  // UPDATE
  static async update(id, payload, file) {
    const exists = await prisma.bankDetail.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Bank detail not found");
    }

    let bankProofFile = exists.bankProofFile;

    if (file) {
      // DELETE OLD
      if (exists.bankProofFile) {
        await S3Service.delete({
          fileUrl: exists.bankProofFile,
        });
      }

      bankProofFile = await S3Service.upload(file.path, "bank-details");
    }

    // PRIMARY HANDLE
    if (payload.isPrimary) {
      await prisma.bankDetail.updateMany({
        where: {
          userId: exists.userId,
        },

        data: {
          isPrimary: false,
        },
      });
    }

    return prisma.bankDetail.update({
      where: { id },

      data: {
        ...payload,

        bankProofFile,
      },
    });
  }

  // GET ALL
  static async getAll({ page = 1, limit = 10, userId, status, search }) {
    const skip = (page - 1) * limit;

    const where = {
      deletedAt: null,

      ...(userId && {
        userId,
      }),

      ...(status && {
        status,
      }),

      ...(search && {
        OR: [
          {
            accountHolder: {
              contains: search,

              mode: "insensitive",
            },
          },

          {
            accountNumber: {
              contains: search,

              mode: "insensitive",
            },
          },

          {
            bankName: {
              contains: search,

              mode: "insensitive",
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.bankDetail.findMany({
        where,

        skip,

        take: limit,

        include: {
          user: {
            select: {
              registrationNumber: true,
              fullName: true,
              phoneNumber: true,
            },
          },
        },

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.bankDetail.count({
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

  // DELETE
  static async delete(id) {
    const exists = await prisma.bankDetail.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Bank detail not found");
    }

    // DELETE FILE
    if (exists.bankProofFile) {
      await S3Service.delete({
        fileUrl: exists.bankProofFile,
      });
    }

    return prisma.bankDetail.update({
      where: { id },

      data: {
        deletedAt: new Date(),
      },
    });
  }
}

export default BankDetailService;
