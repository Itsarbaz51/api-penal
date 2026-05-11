import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";

class CommissionSettingService {
  // CREATE
  static async create(payload, actor) {
    const { targetUserId, packageId, serviceProviderId } = payload;

    if (!targetUserId && !packageId) {
      throw ApiError.badRequest(
        "Either targetUserId or packageId must be provided"
      );
    }

    if (!serviceProviderId) {
      throw ApiError.badRequest("serviceProviderId is required");
    }

    if (targetUserId) {
      const userExists = await prisma.user.findUnique({
        where: { id: targetUserId },
      });
      if (!userExists) {
        throw ApiError.badRequest("Target user not found");
      }
    } else if (packageId) {
      const packageExists = await prisma.package.findUnique({
        where: { id: packageId },
      });

      if (!packageExists) {
        throw ApiError.badRequest("Package not found");
      }
    } else {
      throw ApiError.badRequest("Either targetUserId or packageId is required");
    }

    const serviceProviderExists = await prisma.serviceProvider.findUnique({
      where: { id: serviceProviderId },
    });

    if (!serviceProviderExists) {
      throw ApiError.badRequest("Service provider not found");
    }

    if (targetUserId && packageId) {
      throw ApiError.badRequest(
        "Only one of targetUserId or packageId can be provided"
      );
    }

    const existingSetting = await prisma.commissionSetting.findFirst({
      where: {
        ...(targetUserId && { targetUserId }),
        ...(packageId && { packageId }),
        serviceProviderId,
      },
    });

    if (existingSetting) {
      throw ApiError.conflict(
        "Commission setting already exists for the given target and service provider"
      );
    }

    return prisma.commissionSetting.create({
      data: { ...payload, createdBy: actor.id },
    });
  }

  // UPDATE
  static async update(id, payload) {
    const { targetUserId, packageId, serviceProviderId } = payload;

    // CHECK EXISTING RECORD
    const exists = await prisma.commissionSetting.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Commission setting not found");
    }

    // FINAL VALUES
    const finalTargetUserId = targetUserId ?? exists.targetUserId;

    const finalPackageId = packageId ?? exists.packageId;

    const finalServiceProviderId =
      serviceProviderId ?? exists.serviceProviderId;

    // VALIDATION
    if (finalTargetUserId && finalPackageId) {
      throw ApiError.badRequest(
        "Only one of targetUserId or packageId can be provided"
      );
    }

    if (!finalTargetUserId && !finalPackageId) {
      throw ApiError.badRequest("Either targetUserId or packageId is required");
    }

    // USER CHECK
    if (finalTargetUserId) {
      const userExists = await prisma.user.findUnique({
        where: {
          id: finalTargetUserId,
        },
      });

      if (!userExists) {
        throw ApiError.badRequest("Target user not found");
      }
    }

    // PACKAGE CHECK
    if (finalPackageId) {
      const packageExists = await prisma.package.findUnique({
        where: {
          id: finalPackageId,
        },
      });

      if (!packageExists) {
        throw ApiError.badRequest("Package not found");
      }
    }

    // SERVICE PROVIDER CHECK
    if (finalServiceProviderId) {
      const serviceProviderExists = await prisma.serviceProvider.findUnique({
        where: {
          id: finalServiceProviderId,
        },
      });

      if (!serviceProviderExists) {
        throw ApiError.badRequest("Service provider not found");
      }
    }

    // UPDATE
    return prisma.commissionSetting.update({
      where: { id },
      data: payload,
    });
  }

  // GET ALL
  static async getAll({
    page = 1,
    limit = 10,
    search,
    targetUserId,
    serviceProviderId,
    isActive,
  }) {
    const skip = (page - 1) * limit;

    const where = {
      ...(targetUserId && {
        targetUserId,
      }),

      ...(serviceProviderId && {
        serviceProviderId,
      }),

      ...(isActive !== undefined && {
        isActive,
      }),

      ...(search && {
        OR: [
          {
            operator: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            operatorCode: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.commissionSetting.findMany({
        where,

        skip,
        take: limit,

        include: {
          targetUser: true,
          package: true,
          serviceProvider: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.commissionSetting.count({
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
    const exists = await prisma.commissionSetting.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Commission setting not found");
    }

    return prisma.commissionSetting.delete({
      where: { id },
    });
  }
}

export default CommissionSettingService;
