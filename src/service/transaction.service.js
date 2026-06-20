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
  static async success(tx, transactionId, data = {}) {
    return tx.transaction.update({
      where: {
        id: transactionId,
      },

      data: {
        status: "SUCCESS",

        providerReference: data.providerReference,

        providerResponseInit: data.providerResponseInit,

        providerResponse: data.providerResponse,

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
}
