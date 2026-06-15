import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";

class ApiReferenceService {
  // CREATE
  static async create(payload) {
    const exists = await prisma.apiReference.findFirst({
      where: {
        endpoint: payload.endpoint,
        method: payload.method,
      },
    });

    if (exists) {
      throw ApiError.conflict("API reference already exists");
    }

    return prisma.apiReference.create({
      data: payload,
    });
  }

  // UPDATE
  static async update(id, payload) {
    const exists = await prisma.apiReference.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("API reference not found");
    }

    return prisma.apiReference.update({
      where: { id },

      data: payload,
    });
  }

  // GET ALL
  static async getAll(payload) {
    const { page = 1, limit = 10, module, isActive, search } = payload;

    const skip = (page - 1) * limit;

    const where = {
      ...(module && {
        module,
      }),

      ...(isActive !== undefined && {
        isActive,
      }),

      ...(search && {
        OR: [
          {
            name: {
              contains: search,
            },
          },

          {
            module: {
              contains: search,
            },
          },

          {
            endpoint: {
              contains: search,
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.apiReference.findMany({
        where,
        skip,
        take: limit,
        orderBy: [
          {
            sortOrder: "asc",
          },

          {
            createdAt: "desc",
          },
        ],
      }),

      prisma.apiReference.count({
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

  // GET BY ID
  static async getById(id) {
    const data = await prisma.apiReference.findUnique({
      where: { id },
    });

    if (!data) {
      throw ApiError.notFound("API reference not found");
    }

    return data;
  }

  // DELETE
  static async delete(id) {
    const exists = await prisma.apiReference.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("API reference not found");
    }

    return prisma.apiReference.delete({
      where: { id },
    });
  }
}

export default ApiReferenceService;
