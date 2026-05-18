import prisma from "../db/db.js";

import { ApiError } from "../utils/ApiError.js";

import CryptoService from "../utils/crypto.utils.js";

export default class ProviderResolver {
  static async resolveByServiceProviderId(serviceProviderId) {
    if (!serviceProviderId) {
      throw ApiError.badRequest("serviceProviderId required");
    }

    const serviceProvider = await prisma.serviceProvider.findUnique({
      where: {
        id: serviceProviderId,
      },

      include: {
        provider: true,

        service: true,
      },
    });

    if (!serviceProvider) {
      throw ApiError.notFound("Service Provider not found");
    }

    if (!serviceProvider.isActive) {
      throw ApiError.forbidden("serviceProvider is inactive");
    }

    if (!serviceProvider.provider || !serviceProvider.provider.isActive) {
      throw ApiError.forbidden("Provider is inactive");
    }

    if (!serviceProvider.service || !serviceProvider.service.isActive) {
      throw ApiError.forbidden("Service is inactive");
    }

    // ============================================
    // DECRYPT CONFIG
    // ============================================

    let decryptedConfig = {};

    if (serviceProvider.config) {
      decryptedConfig = await this.decryptObject(serviceProvider.config);
    }

    return {
      service: serviceProvider.service,

      provider: serviceProvider.provider,

      serviceProvider: {
        ...serviceProvider,

        config: decryptedConfig,
      },
    };
  }

  // ============================================
  // RECURSIVE DECRYPT
  // ============================================

  static async decryptObject(obj) {
    if (!obj || typeof obj !== "object") {
      return obj;
    }

    // ARRAY
    if (Array.isArray(obj)) {
      return Promise.all(obj.map((item) => this.decryptObject(item)));
    }

    const result = {};

    for (const key of Object.keys(obj)) {
      const value = obj[key];

      // NESTED OBJECT
      if (value && typeof value === "object") {
        result[key] = await this.decryptObject(value);

        continue;
      }

      // STRING ENCRYPTED
      if (typeof value === "string" && value.includes(":")) {
        try {
          result[key] = await CryptoService.decrypt(value);
        } catch {
          result[key] = value;
        }

        continue;
      }

      result[key] = value;
    }

    return result;
  }
}
