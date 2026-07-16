import prisma from "../db/db.js";

class AuditLogService {
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

    const skip = (Number(page) - 1) * Number(limit);

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

          {
            ipAddress: {
              contains: search,
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.auditLog.findMany({
        where,

        skip,

        take: Number(limit),

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

      totalPages: Math.ceil(total / Number(limit)),
    };
  }
}

export default AuditLogService;
