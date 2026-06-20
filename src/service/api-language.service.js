import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";

class ApiLanguageService {
  // CREATE
  static async create(payload) {
    const exists = await prisma.apiLanguage.findFirst({
      where: {
        OR: [
          {
            name: payload.name,
          },
          {
            slug: payload.slug,
          },
        ],
      },
    });

    if (exists) {
      throw ApiError.conflict("Language already exists");
    }

    return prisma.apiLanguage.create({
      data: payload,
    });
  }

  // UPDATE
  static async update(id, payload) {
    const exists = await prisma.apiLanguage.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Language not found");
    }

    if (payload.name || payload.slug) {
      const duplicate = await prisma.apiLanguage.findFirst({
        where: {
          id: {
            not: id,
          },

          OR: [
            ...(payload.name
              ? [
                  {
                    name: payload.name,
                  },
                ]
              : []),

            ...(payload.slug
              ? [
                  {
                    slug: payload.slug,
                  },
                ]
              : []),
          ],
        },
      });

      if (duplicate) {
        throw ApiError.conflict("Language already exists");
      }
    }

    return prisma.apiLanguage.update({
      where: { id },

      data: payload,
    });
  }

  // GET ALL
  static async getAll(payload) {
    const { page = 1, limit = 10, search, isActive } = payload;

    const skip = (Number(page) - 1) * Number(limit);

    const where = {
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

          {
            slug: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.apiLanguage.findMany({
        where,

        skip,

        take: Number(limit),

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.apiLanguage.count({
        where,
      }),
    ]);

    return {
      data,

      total,

      page: Number(page),

      totalPages: Math.ceil(total / Number(limit)),
    };
  }

  // GET BY ID
  static async getById(id) {
    const exists = await prisma.apiLanguage.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Language not found");
    }

    return exists;
  }

  // DELETE
  static async delete(id) {
    const exists = await prisma.apiLanguage.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Language not found");
    }

    return prisma.apiLanguage.delete({
      where: { id },
    });
  }
}

export default ApiLanguageService;
