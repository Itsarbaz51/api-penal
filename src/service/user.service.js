import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";
import CryptoService from "../utils/crypto.utils.js";
import HelperUtils from "../utils/helper.utils.js";
import S3ServiceUtils from "../utils/S3Service.utils.js";
import WalletService from "./wallet.service.js";

class UserService {
  static async createUser(payload, currentUser) {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: payload.email,
          },

          {
            phoneNumber: payload.phoneNumber,
          },
          {
            companyName: payload.companyName,
          },
        ],
      },
    });

    if (existingUser) {
      throw ApiError.badRequest("User already exists");
    }

    const packageExists = await prisma.package.findUnique({
      where: { id: payload.packageId },
    });

    if (payload.packageId && !packageExists) {
      throw ApiError.badRequest("Invalid package");
    }

    const generatedPassword = HelperUtils.generatePasswordOrPin({
      type: "PASSWORD",
      length: 8,
    });

    const generatedPin = HelperUtils.generatePasswordOrPin({
      type: "PIN",
      length: 4,
    });

    const encryptedPassword = await CryptoService.encrypt(generatedPassword);

    const encryptedPin = await CryptoService.encrypt(generatedPin);

    const registrationNumber = HelperUtils.generateUniqueId("AZZ");

    const user = await prisma.user.create({
      data: {
        registrationNumber,
        fullName: payload.fullName,
        companyName: payload.companyName,
        companyType: payload.companyType,
        status: "IN_ACTIVE",
        email: payload.email.trim().toLowerCase(),
        phoneNumber: payload.phoneNumber,
        password: encryptedPassword,
        transactionPin: encryptedPin,
        role: "API_HOLDER",
        packageId: packageExists.id,
        parentId: currentUser.id,
      },
      include: {
        package: true,
      },
    });

    await WalletService.create({
      userId: user.id,

      wallets: [
        {
          walletType: "PRIMARY",
        },

        {
          walletType: "COMMISSION",
        },

        {
          walletType: "GST",
        },

        {
          walletType: "TDS",
        },
      ],
    });

    return {
      ...user,
      generatedPassword,
      generatedPin,
    };
  }

  static async getUsers(query) {
    const { page = 1, limit = 10, search = "", status } = query;

    const skip = (Number(page) - 1) * Number(limit);

    const where = {
      deletedAt: null,

      role: {
        not: "SUPER_ADMIN",
      },

      ...(search && {
        OR: [
          {
            fullName: {
              contains: search,
            },
          },
          {
            email: {
              contains: search,
            },
          },
          {
            phoneNumber: {
              contains: search,
            },
          },
          {
            registrationNumber: {
              contains: search,
            },
          },
          {
            companyName: {
              contains: search,
            },
          },
        ],
      }),

      ...(status && {
        status,
      }),
    };

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,

        skip,

        take: Number(limit),

        include: {
          package: true,
          permissions: {
            select: {
              id: true,
              serviceId: true,
              canView: true,
              canProcess: true,
              isActive: true,
              service: {
                select: {
                  id: true,
                  name: true,
                  code: true,
                },
              },
            },
          },
        },

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.user.count({ where }),
    ]);

    return {
      data: users.map((user) => {
        const {
          password,
          transactionPin,
          refreshToken,
          passwordForgotToken,
          passwordForgotExpires,
          ...safeUser
        } = user;

        return {
          ...safeUser,
          password: "********",
          transactionPin: "****",
        };
      }),

      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / Number(limit)),
    };
  }

  static async getUserCredentials(id) {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw ApiError.notFound("User not found");
    }

    return {
      password: CryptoService.decrypt(user.password),

      transactionPin: user.transactionPin
        ? CryptoService.decrypt(user.transactionPin)
        : null,
    };
  }

  static async getUser(id) {
    const user = await prisma.user.findUnique({
      where: { id },

      include: {
        package: true,
      },
    });

    if (!user) {
      throw ApiError.notFound("User not found");
    }

    return user;
  }

  static async updateUser(id, payload, file) {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw ApiError.notFound("User not found");
    }

    // PACKAGE CHECK
    if (payload.packageId) {
      const packageExists = await prisma.package.findUnique({
        where: {
          id: payload.packageId,
        },
      });

      if (!packageExists) {
        throw ApiError.badRequest("Invalid package");
      }
    }

    // EMAIL / PHONE CHECK
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: payload.email,
          },

          {
            phoneNumber: payload.phoneNumber,
          },
        ],

        id: {
          not: id,
        },
      },
    });

    if (existingUser) {
      throw ApiError.badRequest("Email or phone already exists");
    }

    let profileImage = user.profileImage;

    // IMAGE UPLOAD
    if (file) {
      profileImage = await S3ServiceUtils.upload(file.path, "users");

      // DELETE OLD IMAGE
      if (user.profileImage) {
        await S3ServiceUtils.delete({
          fileUrl: user.profileImage,
        });
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        fullName: payload.fullName,
        companyName: payload.companyName,
        companyType: payload.companyType,
        profileImage,
        email: payload.email?.trim().toLowerCase(),
        phoneNumber: payload.phoneNumber,
        packageId: payload.packageId,
        status: payload.status,
      },

      include: {
        package: true,
      },
    });

    return updatedUser;
  }

  static async deleteUser(id) {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw ApiError.notFound("User not found");
    }

    await prisma.user.update({
      where: { id },

      data: {
        deletedAt: new Date(),
      },
    });

    return true;
  }
}

export default UserService;
