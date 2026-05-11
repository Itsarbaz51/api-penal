import prisma from "../db/db.js";

import { ApiError } from "../utils/ApiError.js";

class UserLimitService {
  // CREATE
  static async create(payload) {
    const { userId, packageId } = payload;

    // USER CHECK
    if (userId) {
      const userExists = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!userExists) {
        throw ApiError.badRequest("User not found");
      }
    }

    // PACKAGE CHECK
    if (packageId) {
      const packageExists = await prisma.package.findUnique({
        where: { id: packageId },
      });

      if (!packageExists) {
        throw ApiError.badRequest("Package not found");
      }
    }

    // DUPLICATE CHECK
    const exists = await prisma.userLimit.findFirst({
      where: {
        OR: [
          ...(userId ? [{ userId }] : []),

          ...(packageId ? [{ packageId }] : []),
        ],
      },
    });

    if (exists) {
      throw ApiError.conflict("User limit already exists");
    }

    // CREATE
    return prisma.userLimit.create({
      data: payload,
    });
  }

  // UPDATE
  static async update(id, payload) {
    const exists = await prisma.userLimit.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("User limit not found");
    }

    return prisma.userLimit.update({
      where: { id },
      data: payload,
    });
  }

  // GET ALL
  static async getAll({ page = 1, limit = 10, userId, packageId }) {
    const skip = (page - 1) * limit;

    const where = {
      ...(userId && { userId }),

      ...(packageId && {
        packageId,
      }),
    };

    const [data, total] = await Promise.all([
      prisma.userLimit.findMany({
        where,

        skip,
        take: limit,

        include: {
          user: true,
          package: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.userLimit.count({
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
    const exists = await prisma.userLimit.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("User limit not found");
    }

    return prisma.userLimit.delete({
      where: { id },
    });
  }
}

export default UserLimitService;
