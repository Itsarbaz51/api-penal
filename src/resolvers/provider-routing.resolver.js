import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";

export default class ProviderRoutingResolver {
  static async resolve({ apiKeyId, userId, serviceCode }) {
    let mapping;

    // API REQUEST
    if (apiKeyId) {
      mapping = await prisma.apiKeyProviderMapping.findFirst({
        where: {
          apiKeyId,
          isActive: true,
          service: {
            code: serviceCode,
          },
        },
        include: {
          provider: true,
          service: true,
        },
        orderBy: {
          priority: "asc",
        },
      });
    }

    // DASHBOARD REQUEST
    if (!mapping && userId) {
      const apiKey = await prisma.apiKey.findFirst({
        where: {
          userId,
          isActive: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      if (!apiKey) {
        throw ApiError.badRequest("Active API Key not found");
      }

      mapping = await prisma.apiKeyProviderMapping.findFirst({
        where: {
          apiKeyId: apiKey.id,
          isActive: true,
          service: {
            code: serviceCode,
          },
        },
        include: {
          provider: true,
          service: true,
        },
        orderBy: {
          priority: "asc",
        },
      });
    }

    if (!mapping) {
      throw ApiError.badRequest("API KEY Provider mapping not found");
    }

    const serviceProvider = await prisma.serviceProvider.findFirst({
      where: {
        providerId: mapping.providerId,
        serviceId: mapping.serviceId,
        isActive: true,
      },
      include: {
        provider: true,
        service: true,
      },
    });

    if (!serviceProvider) {
      throw ApiError.badRequest("Service provider not found");
    }

    return serviceProvider;
  }
}
