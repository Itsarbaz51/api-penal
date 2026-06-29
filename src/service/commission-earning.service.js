import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";

export default class CommissionEarningService {
  // CREATE
  static async create(tx, payload) {
    return tx.commissionEarning.create({
      data: {
        transactionId: payload.transactionId,

        userId: payload.userId,

        fromUserId: payload.fromUserId,

        serviceProviderId: payload.serviceProviderId,

        amount: Number(payload.amount),

        mode: payload.mode,

        type: payload.type,

        netAmount: Number(payload.netAmount ?? payload.amount),

        metadata: payload.metadata,

        createdBy: payload.createdBy,
      },
    });
  }

  // GET BY ID
  static async getById(id) {
    const earning = await prisma.commissionEarning.findUnique({
      where: { id },

      include: {
        transaction: true,
        user: true,
        fromUser: true,
        serviceProvider: true,
        createdByUser: true,
      },
    });

    if (!earning) {
      throw ApiError.notFound("Commission earning not found");
    }

    return earning;
  }

  // TXN WISE
  static async getByTransaction(transactionId) {
    return prisma.commissionEarning.findMany({
      where: {
        transactionId,
      },

      include: {
        user: {
          select: {
            id: true,
            name: true,
            phoneNumber: true,
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // USER WISE
  static async getByUser(userId, filters = {}) {
    return prisma.commissionEarning.findMany({
      where: {
        userId,

        ...(filters.mode && {
          mode: filters.mode,
        }),

        ...(filters.type && {
          type: filters.type,
        }),
      },

      include: {
        transaction: true,
        fromUser: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // TOTAL USER EARNING
  static async getTotalByUser(userId) {
    const result = await prisma.commissionEarning.aggregate({
      where: {
        userId,
      },

      _sum: {
        netAmount: true,
      },
    });

    return Number(result._sum.netAmount || 0);
  }

  // DELETE
  static async delete(tx, id) {
    const earning = await tx.commissionEarning.findUnique({
      where: { id },
    });

    if (!earning) {
      throw ApiError.notFound("Commission earning not found");
    }

    return tx.commissionEarning.delete({
      where: { id },
    });
  }
}
