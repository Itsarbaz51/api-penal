import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";

class ServiceService {
  // CREATE
  static async create(payload) {
    const { name, code, isActive } = payload;

    if (!name || !code) {
      throw ApiError.badRequest("Name and code required");
    }

    const exists = await prisma.service.findUnique({
      where: { code: code.toUpperCase() },
    });

    if (exists) throw ApiError.conflict("Service already exists");

    return prisma.service.create({
      data: {
        name: name.trim(),
        code: code.trim().toUpperCase(),
        isActive: isActive ?? true,
      },
    });
  }

  // UPDATE
  static async update(id, payload) {
    const service = await prisma.service.findUnique({ where: { id } });
    if (!service) throw ApiError.notFound("Service not found");

    return prisma.service.update({
      where: { id },
      data: {
        name: payload.name,
        isActive: payload.isActive,
      },
    });
  }

  // GET ALL
  static async getAll({ page = 1, limit = 10, search, isActive }) {
    const skip = (page - 1) * limit;

    const where = {
      ...(isActive !== undefined && { isActive }),
      ...(search && {
        OR: [
          { name: { contains: search,  } },
          { code: { contains: search, } },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.service.findMany({
        where,
        skip,
        take: limit,
        include: {
          serviceProviders: {
            include: { provider: true },
          },
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.service.count({ where }),
    ]);

    return { data, total, page, totalPages: Math.ceil(total / limit) };
  }

  // DELETE
  static async delete(id) {
    const service = await prisma.service.findUnique({ where: { id } });
    if (!service) throw ApiError.notFound("Service not found");

    return prisma.service.delete({ where: { id } });
  }
}

export default ServiceService;
