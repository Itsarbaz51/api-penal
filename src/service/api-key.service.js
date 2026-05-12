import crypto from "node:crypto";
import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";
import CryptoService from "../utils/crypto.utils.js";

class ApiKeyService {
  // GENERATE API KEY
  static generateApiKey() {
    return `azz_live_${crypto.randomBytes(16).toString("hex")}`;
  }

  // GENERATE SECRET
  static generateSecretKey() {
    return `azz_secret_${crypto.randomBytes(24).toString("hex")}`;
  }

  static callbackSecret() {
    return `azz_cb_${crypto.randomBytes(24).toString("hex")}`;
  }

  // CREATE
  static async create(payload) {
    const userExists = await prisma.user.findUnique({
      where: {
        id: payload.userId,
      },
    });

    if (!userExists) {
      throw ApiError.badRequest("User not found");
    }

    if (
      payload.allowedIps &&
      payload.allowedIps.length > (payload.maxIpLimit || 5)
    ) {
      throw ApiError.badRequest("Maximum IP limit exceeded");
    }

    const existingName = await prisma.apiKey.findFirst({
      where: {
        userId: payload.userId,
      },
    });

    if (existingName) {
      throw ApiError.conflict("API key already exists");
    }

    const apiKey = this.generateApiKey();

    const secretKey = this.generateSecretKey();
    const callbackSecret = this.callbackSecret();

    const secretKeyEncrypt = await CryptoService.encrypt(secretKey);
    const callbackSecretEncrypt = callbackSecret
      ? await CryptoService.encrypt(callbackSecret)
      : null;

    const created = await prisma.apiKey.create({
      data: {
        userId: payload.userId,
        name: payload.name,
        apiKey,
        secretKey: secretKeyEncrypt,
        allowedIps: payload.allowedIps,
        maxIpLimit: payload.maxIpLimit || 5,
        callbackUrl: payload.callbackUrl,
        callbackSecret: callbackSecretEncrypt,
        requestsPerMinute: payload.requestsPerMinute || 60,
        requestsPerDay: payload.requestsPerDay || 10000,
        isActive: payload.isActive ?? true,
        expiresAt: payload.expiresAt,
        remarks: payload.remarks,
      },
    });

    return {
      ...created,
      apiKey,
      secretKey,
      callbackSecret,
    };
  }

  // UPDATE
  static async update(id, payload, currentUser) {
    const exists = await prisma.apiKey.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("API key not found");
    }

    // PREVENT SECRET/API KEY UPDATE
    delete payload.apiKey;
    delete payload.secretKey;
    delete payload.callbackSecret;

    // ONLY SUPER ADMIN
    if (currentUser.role !== "SUPER_ADMIN") {
      delete payload.name;
      delete payload.maxIpLimit;
      delete payload.requestsPerMinute;
      delete payload.requestsPerDay;
      delete payload.isActive;
      delete payload.expiresAt;
      delete payload.remarks;
    }

    // IP LIMIT CHECK
    if (
      payload.allowedIps &&
      payload.allowedIps.length > (payload.maxIpLimit || exists.maxIpLimit)
    ) {
      throw ApiError.badRequest("Maximum IP limit exceeded");
    }

    return prisma.apiKey.update({
      where: { id },

      data: payload,
    });
  }

  // GET ALL
  static async getAll({ page = 1, limit = 10, userId, isActive, search }) {
    const skip = (page - 1) * limit;

    const where = {
      ...(userId && { userId }),

      ...(isActive !== undefined && {
        isActive,
      }),

      ...(search && {
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.apiKey.findMany({
        where,

        skip,

        take: limit,

        include: {
          user: {
            select: {
              id: true,

              fullName: true,

              email: true,

              phoneNumber: true,
            },
          },
        },

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.apiKey.count({
        where,
      }),
    ]);

    // SAFE RESPONSE
    const safeData = await Promise.all(
      data.map(async (item) => {
        return {
          ...item,

          // OPTIONAL
          apiKey: "********",
          secretKey: "********",
          callbackSecret: item.callbackSecret ? "********" : null,
        };
      })
    );

    return {
      data: safeData,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  // GET CREDENTIALS
  static async getCredentials(userId) {
    const apiKeyData = await prisma.apiKey.findFirst({
      where: { userId },
    });

    if (!apiKeyData) {
      throw ApiError.notFound("API key not found");
    }

    return {
      // PLAIN
      apiKey: apiKeyData.apiKey,

      // ENCRYPTED
      secretKey:
        apiKeyData.secretKey && apiKeyData.secretKey.includes(":")
          ? CryptoService.decrypt(apiKeyData.secretKey)
          : apiKeyData.secretKey,

      callbackSecret:
        apiKeyData.callbackSecret && apiKeyData.callbackSecret.includes(":")
          ? CryptoService.decrypt(apiKeyData.callbackSecret)
          : apiKeyData.callbackSecret,
    };
  }

  // DELETE
  static async delete(id) {
    const exists = await prisma.apiKey.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("API key not found");
    }

    return prisma.apiKey.delete({
      where: { id },
    });
  }
}

export default ApiKeyService;
