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
      data: {
        name: payload.name,
        module: payload.module,
        method: payload.method,
        endpoint: payload.endpoint,
        description: payload.description,
        authType: payload.authType,
        headers: payload.headers,
        queryParams: payload.queryParams,
        pathParams: payload.pathParams,
        requestFields: payload.requestFields,
        sampleRequest: payload.sampleRequest,
        sampleResponse: payload.sampleResponse,
        responseFields: payload.responseFields,
        errorResponses: payload.errorResponses,
        tags: payload.tags,
        version: payload.version,
        baseUrl: payload.baseUrl,
        contentType: payload.contentType,
        sortOrder: payload.sortOrder,
        isActive: payload.isActive,
      },
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
      data: {
        ...payload,
      },
    });
  }

  // GET ALL
  static async getAll(payload) {
    const { page = 1, limit = 10, module, search, isActive } = payload;

    const skip = (page - 1) * limit;

    const where = {
      ...(module && { module }),

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
            module: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            endpoint: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.apiReference.findMany({
        where,
        skip: Number(skip),
        take: Number(limit),
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
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // GET active
  static async getActive(payload) {
    const { module, search } = payload;

    const where = {
      isActive: true,

      ...(module && {
        module,
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
            module: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            endpoint: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.apiReference.findMany({
        where,

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
