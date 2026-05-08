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

  static async getPackages() {
    return await prisma.package.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
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
