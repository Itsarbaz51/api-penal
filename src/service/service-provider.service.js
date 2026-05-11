import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";

class ServiceProviderService {
  // CREATE
  static async create(payload) {
    const exists = await prisma.serviceProvider.findFirst({
      where: {
        serviceId: payload.serviceId,
        providerId: payload.providerId,
        operatorCode: payload.operatorCode || null,
        paymentMethod: payload.paymentMethod || null,
        network: payload.network || null,
      },
    });

    if (exists) {
      throw ApiError.conflict("Service provider already exists");
    }

    return prisma.serviceProvider.create({
      data: payload,
    });
  }

  // UPDATE
  static async update(id, payload) {
    const exists = await prisma.serviceProvider.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Service provider not found");
    }

    return prisma.serviceProvider.update({
      where: { id },
      data: payload,
    });
  }

  // GET ALL
  static async getAll({
    page = 1,
    limit = 10,
    search,
    serviceId,
    providerId,
    isActive,
  }) {
    const skip = (page - 1) * limit;

    const where = {
      ...(serviceId && { serviceId }),

      ...(providerId && { providerId }),

      ...(isActive !== undefined && { isActive }),

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
      prisma.serviceProvider.findMany({
        where,
        skip,
        take: limit,

        include: {
          service: true,
          provider: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.serviceProvider.count({ where }),
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
    const exists = await prisma.serviceProvider.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Service provider not found");
    }

    return prisma.serviceProvider.delete({
      where: { id },
    });
  }
}

export default ServiceProviderService;
