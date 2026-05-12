import prisma from "../db/db.js";

class LoginEventService {
  // GET ALL
  static async getAll(payload, actor) {
    const { page = 1, limit = 10, userId, roleType, search } = payload;

    const skip = (page - 1) * limit;

    // ROLE BASED FILTER
    let finalUserId;

    // SUPER ADMIN
    if (actor.role === "SUPER_ADMIN") {
      // OPTIONAL FILTER
      finalUserId = userId || undefined;
    } else {
      // NORMAL USER
      finalUserId = actor.id;
    }

    const where = {
      ...(finalUserId && {
        userId: finalUserId,
      }),

      ...(roleType && {
        roleType,
      }),

      ...(search && {
        OR: [
          {
            ipAddress: {
              contains: search,

              mode: "insensitive",
            },
          },

          {
            domainName: {
              contains: search,

              mode: "insensitive",
            },
          },

          {
            location: {
              contains: search,

              mode: "insensitive",
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.loginEvent.findMany({
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

      prisma.loginEvent.count({
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

export default LoginEventService;
