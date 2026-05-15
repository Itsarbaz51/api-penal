import prisma from "../db/db.js";

import { ApiError } from "../utils/ApiError.js";

class ApiKeyProviderMappingService {
  // CREATE
  static async create(payload) {
    const [apiKey, service, provider] = await Promise.all([
      prisma.apiKey.findUnique({
        where: {
          id: payload.apiKeyId,
        },
      }),

      prisma.service.findUnique({
        where: {
          id: payload.serviceId,
        },
      }),

      prisma.provider.findUnique({
        where: {
          id: payload.providerId,
        },
      }),
    ]);

    if (!apiKey) {
      throw ApiError.badRequest("API key not found");
    }

    if (!service) {
      throw ApiError.badRequest("Service not found");
    }

    if (!provider) {
      throw ApiError.badRequest("Provider not found");
    }

    const exists = await prisma.apiKeyProviderMapping.findFirst({
      where: {
        apiKeyId: payload.apiKeyId,

        serviceId: payload.serviceId,

        providerId: payload.providerId,
      },
    });

    if (exists) {
      throw ApiError.conflict("Mapping already exists");
    }

    return prisma.apiKeyProviderMapping.create({
      data: payload,

      include: {
        apiKey: true,

        service: true,

        provider: true,
      },
    });
  }

  // UPDATE
  static async update(id, payload) {
    const exists = await prisma.apiKeyProviderMapping.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Mapping not found");
    }

    return prisma.apiKeyProviderMapping.update({
      where: { id },

      data: payload,

      include: {
        apiKey: true,

        service: true,

        provider: true,
      },
    });
  }

  // GET ALL
  static async getAll({
    page = 1,
    limit = 10,
    apiKeyId,
    serviceId,
    providerId,
    isActive,
  }) {
    const skip = (page - 1) * limit;

    const where = {
      ...(apiKeyId && {
        apiKeyId,
      }),

      ...(serviceId && {
        serviceId,
      }),

      ...(providerId && {
        providerId,
      }),

      ...(isActive !== undefined && {
        isActive,
      }),
    };

    const [data, total] = await Promise.all([
      prisma.apiKeyProviderMapping.findMany({
        where,

        skip,

        take: limit,

        include: {
          apiKey: true,

          service: true,

          provider: true,
        },

        orderBy: {
          priority: "asc",
        },
      }),

      prisma.apiKeyProviderMapping.count({
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
    const exists = await prisma.apiKeyProviderMapping.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Mapping not found");
    }

    return prisma.apiKeyProviderMapping.delete({
      where: { id },
    });
  }
}

export default ApiKeyProviderMappingService;
