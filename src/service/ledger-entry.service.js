import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";

class LedgerEntryService {
  // CREATE
  static async create(payload) {
    const wallet = await prisma.wallet.findUnique({
      where: {
        id: payload.walletId,
      },
    });

    if (!wallet) {
      throw ApiError.notFound("Wallet not found");
    }

    if (payload.idempotencyKey) {
      const existing = await prisma.ledgerEntry.findUnique({
        where: {
          idempotencyKey: payload.idempotencyKey,
        },
      });

      if (existing) {
        return existing;
      }
    }

    return prisma.ledgerEntry.create({
      data: {
        ...payload,
        runningBalance: wallet.balance,
      },
    });
  }

  // GET ALL
  static async getAll({
    page = 1,
    limit = 10,
    walletId,
    transactionId,
    entryType,
  }) {
    const skip = (page - 1) * limit;

    const where = {
      ...(walletId && {
        walletId,
      }),

      ...(transactionId && {
        transactionId,
      }),

      ...(entryType && {
        entryType,
      }),
    };

    const [data, total] = await Promise.all([
      prisma.ledgerEntry.findMany({
        where,

        skip,

        take: limit,

        include: {
          wallet: true,
          transaction: true,
          serviceProvider: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.ledgerEntry.count({
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

  // GET ONE
  static async getById(id) {
    const entry = await prisma.ledgerEntry.findUnique({
      where: { id },

      include: {
        wallet: true,
        transaction: true,
        serviceProvider: true,
      },
    });

    if (!entry) {
      throw ApiError.notFound("Ledger entry not found");
    }

    return entry;
  }
}

export default LedgerEntryService;
