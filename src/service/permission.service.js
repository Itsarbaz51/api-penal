import prisma from "../db/db.js";

import { ApiError } from "../utils/ApiError.js";

class PermissionService {
  // CREATE
  static async create(payload) {
    const serviceExists = await prisma.service.findUnique({
      where: {
        id: payload.serviceId,
      },
    });

    if (!serviceExists) {
      throw ApiError.badRequest("Service not found");
    }

    if (payload.userId) {
      const userExists = await prisma.user.findUnique({
        where: {
          id: payload.userId,
        },
      });

      if (!userExists) {
        throw ApiError.badRequest("User not found");
      }
    }

    // PACKAGE CHECK
    if (payload.packageId) {
      const packageExists = await prisma.package.findUnique({
        where: {
          id: payload.packageId,
        },
      });

      if (!packageExists) {
        throw ApiError.badRequest("Package not found");
      }
    }

    // DUPLICATE CHECK
    const exists = await prisma.permission.findFirst({
      where: {
        serviceId: payload.serviceId,

        ...(payload.userId && {
          userId: payload.userId,
        }),

        ...(payload.packageId && {
          packageId: payload.packageId,
        }),
      },
    });

    if (exists) {
      throw ApiError.conflict("Permission already exists");
    }

    return prisma.permission.create({
      data: payload,
    });
  }

  // UPDATE
  static async update(id, payload) {
    const exists = await prisma.permission.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Permission not found");
    }

    return prisma.permission.update({
      where: { id },

      data: payload,
    });
  }

  // GET ALL
  static async getAll({
    page = 1,
    limit = 10,
    scope,
    userId,
    packageId,
    serviceId,
  }) {
    const skip = (page - 1) * limit;

    const where = {
      ...(scope && { scope }),

      ...(userId && { userId }),

      ...(packageId && {
        packageId,
      }),

      ...(serviceId && {
        serviceId,
      }),
    };

    const [data, total] = await Promise.all([
      prisma.permission.findMany({
        where,

        skip,

        take: limit,

        include: {
          user: {
            select: {
              id: true,
              registrationNumber: true,
              fullName: true,
            },
          },

          package: true,

          service: {
            select: {
              id: true,
              name: true,
              code: true,
              isActive: true,
            },
          },
        },

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.permission.count({
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

  static async myPermissions(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        package: true,
      },
    });

    const services = await prisma.service.findMany({
      where: {
        isActive: true,
      },

      orderBy: {
        name: "asc",
      },
    });

    const permissions = await prisma.permission.findMany({
      where: {
        OR: [
          {
            userId,
          },

          {
            packageId: user.packageId,
          },
        ],
      },
    });

    const permissionMap = new Map();

    // PACKAGE FIRST
    permissions
      .filter((p) => p.packageId)
      .forEach((p) => {
        permissionMap.set(p.serviceId, {
          source: "PACKAGE",
          isActive: p.isActive,
          canView: p.canView,
          canProcess: p.canProcess,
        });
      });

    // USER OVERRIDE
    permissions
      .filter((p) => p.userId)
      .forEach((p) => {
        permissionMap.set(p.serviceId, {
          source: "USER",
          isActive: p.isActive,
          canView: p.canView,
          canProcess: p.canProcess,
        });
      });

    return services.map((service) => {
      const permission = permissionMap.get(service.id);

      return {
        serviceId: service.id,
        serviceName: service.name,
        serviceCode: service.code,

        hasPermission: permission?.isActive,

        canView: permission?.canView,
        canProcess: permission?.canProcess,

        source: permission?.source,
      };
    });
  }

  // DELETE
  static async delete(id) {
    const exists = await prisma.permission.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Permission not found");
    }

    return prisma.permission.delete({
      where: { id },
    });
  }
}

export default PermissionService;
