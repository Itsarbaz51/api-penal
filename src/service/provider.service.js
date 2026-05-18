import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";

export class ProviderService {
  static async create(payload) {
    const { name, code, type, isActive } = payload;

    if (!name || !code) {
      throw ApiError.badRequest("Name and code required");
    }

    const exists = await prisma.provider.findUnique({
      where: { code: code.toUpperCase() },
    });

    if (exists) {
      throw ApiError.conflict("Provider already exists");
    }

    return prisma.provider.create({
      data: {
        name: name.trim(),
        code: code.trim().toUpperCase(),
        type: type?.trim()?.toUpperCase(),
        isActive: isActive ?? true,
      },
    });
  }

  static async update(id, payload) {
    const provider = await prisma.provider.findUnique({
      where: { id },
    });

    if (!provider) {
      throw ApiError.notFound("Provider not found");
    }

    return prisma.provider.update({
      where: { id },
      data: {
        name: payload.name,
        type: payload.type?.trim()?.toUpperCase(),
        isActive: payload.isActive,
      },
    });
  }

  static async getAll({ page = 1, limit = 10, search, isActive, type }) {
    const skip = (page - 1) * limit;

    const where = {
      ...(isActive !== undefined && { isActive }),

      ...(type && {
        type: type.toUpperCase(),
      }),

      ...(search && {
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            code: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.provider.findMany({
        where,
        skip,
        take: limit,
        include: {
          serviceProviders: {
            include: {
              service: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.provider.count({ where }),
    ]);

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  static async delete(id) {
    const provider = await prisma.provider.findUnique({ where: { id } });
    if (!provider) throw ApiError.notFound("Provider not found");

    return prisma.provider.delete({ where: { id } });
  }
}
