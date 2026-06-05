import prisma from "../db/db.js";

class LoginEventService {
  static async getAll(payload, actor) {
    const page = parseInt(payload.page || 1, 10);
    const limit = parseInt(payload.limit || 10, 10);

    const { userId, roleType, search } = payload;

    const skip = (page - 1) * limit;

    let finalUserId;

    if (actor.role === "SUPER_ADMIN") {
      finalUserId = userId || undefined;
    } else {
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
            },
          },
          {
            domainName: {
              contains: search,
            },
          },
          {
            location: {
              contains: search,
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
