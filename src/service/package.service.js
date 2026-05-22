import prisma from "../db/db.js";

import { ApiError } from "../utils/ApiError.js";

class PackageService {
  static async createPackage(payload) {
    const existingPackage = await prisma.package.findFirst({
      where: {
        name: payload.name,
      },
    });

    if (existingPackage) {
      throw ApiError.badRequest("Package already exists");
    }

    return prisma.package.create({
      data: {
        name: payload.name,
      },
    });
  }

  static async getPackages(query) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const search = query.search?.trim() || "";
    const skip = (page - 1) * limit;

    const where = {
      ...(search && {
        OR: [
          {
            name: {
              contains: search,
              lte: "insensitive",
            },
          },
        ],
      }),
    };

    const [packages, total] = await prisma.$transaction([
      prisma.package.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.package.count({
        where,
      }),
    ]);

    return {
      data: packages,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  static async updatePackage(id, payload) {
    const packageData = await prisma.package.findUnique({
      where: { id },
    });

    if (!packageData) {
      throw ApiError.notFound("Package not found");
    }

    return prisma.package.update({
      where: { id },

      data: {
        name: payload.name,
      },
    });
  }

  static async deletePackage(id) {
    const packageData = await prisma.package.findUnique({
      where: { id },
    });

    if (!packageData) {
      throw ApiError.notFound("Package not found");
    }

    await prisma.package.delete({
      where: { id },
    });

    return true;
  }
}

export default PackageService;
