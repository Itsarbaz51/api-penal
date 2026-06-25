import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";
import CryptoService from "../utils/crypto.utils.js";
import crypto from "node:crypto";

class ApiKeyMiddleware {
  static verify = async (req, res, next) => {
    try {
      // GET HEADERS
      const apiKey = req.headers["x-api-key"];
      const secretKey = req.headers["x-secret-key"];

      if (!apiKey) {
        throw ApiError.unauthorized("x-api-key missing");
      }

      if (!secretKey) {
        throw ApiError.unauthorized("x-secret-key missing");
      }

      // FIND API KEY
      const apiKeyData = await prisma.apiKey.findUnique({
        where: {
          apiKey,
        },

        include: {
          user: true,

          apiKeyProviderMappings: {
            where: {
              isActive: true,
            },

            include: {
              provider: true,
              service: true,
            },
          },
        },
      });

      if (!apiKeyData) {
        throw ApiError.unauthorized("Invalid API key");
      }

      // SECRET KEY VALIDATE
      const decryptedSecret = await CryptoService.decrypt(apiKeyData.secretKey);

      const isValid = crypto.timingSafeEqual(
        Buffer.from(decryptedSecret),
        Buffer.from(secretKey)
      );

      if (!isValid) {
        throw ApiError.unauthorized("Invalid secret key");
      }

      // API KEY STATUS
      if (!apiKeyData.isActive) {
        throw ApiError.forbidden("API key inactive");
      }

      // EXPIRE CHECK
      if (apiKeyData.expiresAt && new Date(apiKeyData.expiresAt) < new Date()) {
        throw ApiError.forbidden("API key expired");
      }

      // USER CHECK
      if (!apiKeyData.user) {
        throw ApiError.forbidden("User not found");
      }

      if (
        !apiKeyData.apiKeyProviderMappings ||
        apiKeyData.apiKeyProviderMappings.length === 0
      ) {
        throw ApiError.forbidden("No provider mapping assigned");
      }

      // IP VALIDATION
      const requestIp =
        req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
        req.socket?.remoteAddress ||
        req.ip;

      if (!Array.isArray(apiKeyData.allowedIps)) {
        throw ApiError.forbidden("No allowed IP configured");
      }

      if (!apiKeyData.allowedIps.includes(requestIp)) {
        throw ApiError.forbidden("IP not allowed");
      }

      // UPDATE LAST USED
      prisma.apiKey
        .update({
          where: {
            id: apiKeyData?.id,
          },

          data: {
            lastUsedAt: new Date(),
            lastUsedIp: String(requestIp),
          },
        })
        .catch(console.error);

      // REQUEST ATTACH
      req.apiKey = {
        id: apiKeyData?.id,
        apiKey: apiKeyData.apiKey,
        mappings: apiKeyData.apiKeyProviderMappings,
      };
      req.user = apiKeyData.user;

      next();
    } catch (error) {
      next(error);
    }
  };
}

export default ApiKeyMiddleware;
