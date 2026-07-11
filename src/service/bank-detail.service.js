import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";
import S3Service from "../utils/S3Service.utils.js";

class BankDetailService {
  // CREATE
  static async create(payload, file, user) {
    return prisma.$transaction(async (tx) => {
      const userExists = await tx.user.findUnique({
        where: { id: user.id },
      });

      if (!userExists) {
        throw ApiError.badRequest("User not found");
      }

      const exists = await tx.bankDetail.findUnique({
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

      // Only one primary account
      if (payload.isPrimary) {
        await tx.bankDetail.updateMany({
          where: {
            userId: user.id,
            isPrimary: true,
          },
          data: {
            isPrimary: false,
          },
        });
      }

      return tx.bankDetail.create({
        data: {
          userId: user.id,

          accountHolder: payload.accountHolder,
          accountNumber: payload.accountNumber,
          phoneNumber: payload.phoneNumber,
          accountType: payload.accountType,
          ifscCode: payload.ifscCode,
          bankName: payload.bankName,

          bankProofFile,

          isPrimary: payload.isPrimary ?? false,

          // SUPER ADMIN => VERIFIED
          // API HOLDER => PENDING
          status: user.role === "SUPER_ADMIN" ? "VERIFIED" : "PENDING",
        },
      });
    });
  }

  // UPDATE
  static async update(id, payload, file, actor) {
    return prisma.$transaction(async (tx) => {
      const exists = await tx.bankDetail.findUnique({
        where: { id },
      });

      if (!exists) {
        throw ApiError.notFound("Bank detail not found");
      }

      // ❌ Only Super Admin can update status
      if (payload.status && actor.role !== "SUPER_ADMIN") {
        throw ApiError.forbidden(
          "Only Super Admin can update bank verification status"
        );
      }

      let bankProofFile = exists.bankProofFile;

      if (file) {
        if (exists.bankProofFile) {
          await S3Service.delete({
            fileUrl: exists.bankProofFile,
          });
        }

        bankProofFile = await S3Service.upload(file.path, "bank-details");
      }

      // Only one primary account
      if (payload.isPrimary) {
        await tx.bankDetail.updateMany({
          where: {
            userId: exists.userId,
            isPrimary: true,
            NOT: {
              id,
            },
          },
          data: {
            isPrimary: false,
          },
        });
      }

      return tx.bankDetail.update({
        where: { id },
        data: {
          ...payload,
          bankProofFile,
        },
      });
    });
  }

  // GET ALL
  static async getAll({ page = 1, limit = 10, status, search }, actor) {
    const skip = (Number(page) - 1) * Number(limit);

    const where = {
      deletedAt: null,

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

    // ROLE BASED FILTER
    switch (actor.role) {
      case "SUPER_ADMIN":
        // Super Admin apna bank detail nahi dekhega
        where.user = {
          role: "API_HOLDER",
        };
        break;

      case "API_HOLDER":
        // API Holder sirf apne bank dekhega
        where.userId = actor.id;
        break;

      default:
        throw ApiError.forbidden("Unauthorized");
    }

    const [data, total] = await Promise.all([
      prisma.bankDetail.findMany({
        where,
        skip,
        take: Number(limit),
        include: {
          user: {
            select: {
              id: true,
              registrationNumber: true,
              fullName: true,
              phoneNumber: true,
              role: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.bankDetail.count({ where }),
    ]);

    return {
      data,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit)),
    };
  }

  // GET ALL
  static async getAllMy(query, actor) {
    const { page = 1, limit = 10, status, search } = query;
    const userId = actor?.id;
    const skip = (Number(page) - 1) * Number(limit);

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
            },
          },

          {
            accountNumber: {
              contains: search,
            },
          },

          {
            bankName: {
              contains: search,
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.bankDetail.findMany({
        where,
        skip,
        take: Number(limit),
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
