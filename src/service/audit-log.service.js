import prisma from "../db/db.js";

class AuditLogService {
  // GET ALL
  // GET ALL
  static async getAll(payload, actor) {
    const {
      page = 1,
      limit = 10,
      userId,
      module,
      action,
      status,
      search,
    } = payload;

    const skip = (page - 1) * limit;

    // ROLE BASED FILTER
    let finalUserId;

    // SUPER ADMIN
    if (actor.role === "SUPER_ADMIN") {
      // OPTIONAL USER FILTER
      finalUserId = userId || undefined;
    } else {
      // NORMAL USER
      finalUserId = actor.id;
    }

    const where = {
      ...(finalUserId && {
        userId: finalUserId,
      }),

      ...(module && {
        module,
      }),

      ...(action && {
        action,
      }),

      ...(status && {
        status,
      }),

      ...(search && {
        OR: [
          {
            action: {
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

          {
            ipAddress: {
              contains: search,

              mode: "insensitive",
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.auditLog.findMany({
        where,

        skip,

        take: limit,

        include: {
          user: {
            select: {
              fullName: true,
              registrationNumber: true,
              phoneNumber: true,
              email: true,
            },
          },
        },

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.auditLog.count({
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
}

export default AuditLogService;
