import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";

export default class TransactionService {
  // CREATE
  static async create(tx, payload) {
    const existingTxn = await tx.transaction.findFirst({
      where: {
        OR: [
          { txnId: payload.txnId },
          { idempotencyKey: payload.idempotencyKey },
        ],
      },
    });

    if (existingTxn) {
      return {
        transaction: existingTxn,
        isDuplicate: true,
      };
    }

    const transaction = await tx.transaction.create({
      data: {
        txnId: payload.txnId,
        idempotencyKey: payload.idempotencyKey,

        userId: payload.userId,
        walletId: payload.walletId,

        serviceProviderId: payload.serviceProviderId,
        providerReference: payload?.providerReference,

        serviceCode: payload.serviceCode,
        providerCode: payload.providerCode,

        amount: Number(payload.amount),
        netAmount: Number(payload.netAmount ?? payload.amount),

        pricing: payload.pricing,
        requestInit: payload.requestInit,

        status: "PENDING",
      },
    });

    return {
      transaction,
      isDuplicate: false,
    };
  }

  // SUCCESS
  static async success({
    tx,
    actor,
    transactionId,
    wallet,
    serviceProvider,
    service,
    provider,

    providerReference,
    providerResponse,
    providerResponseInit,

    category,
    paymentMethod,
    cardNetwork,
    operator,
  }) {
    return tx.transaction.update({
      where: {
        id: transactionId,
      },

      data: {
        status: "SUCCESS",

        providerReference: providerReference,

        providerResponseInit: providerResponseInit,

        providerResponse: providerResponse,

        processedAt: new Date(),

        completedAt: new Date(),
      },
    });
  }

  // FAILED
  static async failed(tx, transactionId, data = {}) {
    return tx.transaction.update({
      where: {
        id: transactionId,
      },

      data: {
        status: "FAILED",

        providerReference: data.providerReference,

        providerResponseInit: data.providerResponseInit,

        providerResponse: data.providerResponse,

        processedAt: new Date(),

        completedAt: new Date(),
      },
    });
  }

  // PENDING
  static async pending(tx, transactionId, data = {}) {
    return tx.transaction.update({
      where: {
        id: transactionId,
      },

      data: {
        status: "PENDING",

        providerReference: data.providerReference,

        providerResponseInit: data.providerResponseInit,

        providerResponse: data.providerResponse,

        processedAt: new Date(),
      },
    });
  }

  // GET BY ID
  static async getById(id) {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id,
      },

      include: {
        user: true,
        wallet: true,
        serviceProvider: true,
        ledgerEntries: true,
        commissionEarnings: true,
      },
    });

    if (!transaction) {
      throw ApiError.notFound("Transaction not found");
    }

    return transaction;
  }

  // GET BY TXN ID
  static async getByTxnId(txnId) {
    const transaction = await prisma.transaction.findUnique({
      where: {
        txnId,
      },
    });

    if (!transaction) {
      throw ApiError.notFound("Transaction not found");
    }

    return transaction;
  }

  // RETRY COUNT
  static async incrementRetry(tx, transactionId) {
    return tx.transaction.update({
      where: {
        id: transactionId,
      },

      data: {
        retryCount: {
          increment: 1,
        },

        lastCheckedAt: new Date(),
      },
    });
  }

  static async getTransactions({
    page = 1,
    limit = 10,
    status,
    serviceCode,
    search,
    date,
    actor,
  }) {
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    const filters = [];

    switch (actor.role) {
      case "SUPER_ADMIN":
        break;

      case "API_HOLDER":
        filters.push({
          userId: actor.id,
        });
        break;

      default:
        throw ApiError.forbidden("Unauthorized");
    }

    if (status) {
      filters.push({
        status: status.toUpperCase(),
      });
    }

    if (serviceCode) {
      filters.push({
        serviceCode: serviceCode.toUpperCase(),
      });
    }

    if (search) {
      filters.push({
        OR: [
          {
            txnId: {
              contains: search,
            },
          },
          {
            providerReference: {
              contains: search,
            },
          },
          {
            user: {
              OR: [
                {
                  fullName: {
                    contains: search,
                  },
                },
                {
                  phoneNumber: {
                    contains: search,
                  },
                },
              ],
            },
          },
        ],
      });
    }

    if (date) {
      let start;
      let end;

      const now = new Date();

      if (date === "today") {
        start = new Date();
        start.setHours(0, 0, 0, 0);

        end = new Date();
        end.setHours(23, 59, 59, 999);
      }

      if (date === "yesterday") {
        start = new Date();
        start.setDate(start.getDate() - 1);
        start.setHours(0, 0, 0, 0);

        end = new Date();
        end.setDate(end.getDate() - 1);
        end.setHours(23, 59, 59, 999);
      }

      if (date === "week") {
        start = new Date();
        start.setDate(now.getDate() - now.getDay());
        start.setHours(0, 0, 0, 0);

        end = new Date();
      }

      if (date === "month") {
        start = new Date(now.getFullYear(), now.getMonth(), 1);

        end = new Date();
      }

      if (start && end) {
        filters.push({
          initiatedAt: {
            gte: start,
            lte: end,
          },
        });
      }
    }

    const where = filters.length ? { AND: filters } : {};

    const [transactions, total] = await Promise.all([
      prisma.transaction.findMany({
        where,
        skip,
        take: limitNumber,
        orderBy: {
          initiatedAt: "desc",
        },
        include: {
          user: {
            select: {
              id: true,
              fullName: true,
              phoneNumber: true,
              registrationNumber: true,
            },
          },

          wallet: {
            select: {
              walletType: true,
            },
          },

          serviceProvider: {
            include: {
              service: true,
              provider: true,
            },
          },
        },
      }),

      prisma.transaction.count({
        where,
      }),
    ]);

    return {
      data: transactions,

      pagination: {
        total,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(total / limitNumber),
      },
    };
  }
}
