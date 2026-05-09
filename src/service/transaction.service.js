import { ApiError } from "../utils/ApiError.js";

export default class TransactionService {
  // CREATE
  static async create(
    tx,
    {
      txnId,
      userId,
      walletId,
      serviceProviderMappingId,
      amount,
      idempotencyKey,
      providerReference = null,
      requestPayload,
      pricing,
    }
  ) {
    if (!userId || !walletId)
      throw ApiError.badRequest("userId & walletId required");

    // Idempotency Check
    if (idempotencyKey) {
      const existingTxn = await tx.transaction.findUnique({
        where: { idempotencyKey },
      });

      if (existingTxn) {
        return {
          transaction: existingTxn,
        };
      }
    }

    const transaction = await tx.transaction.create({
      data: {
        txnId,
        userId,
        walletId,
        providerReference,
        serviceProviderMappingId,
        amount,
        pricing,
        netAmount: amount,
        status: "PENDING",
        idempotencyKey,
      },
    });

    return { transaction };
  }

  // UPDATE (Provider response / Final status)
  static async update(
    tx,
    {
      transactionId,
      status,
      netAmount,
      pricing,
      providerReference,
      providerResponse,
      providerInitData,
      retryCount,
      lastCheckedAt,
    }
  ) {
    if (!transactionId) throw ApiError.badRequest("TransactionId required");

    const existingTxn = await tx.transaction.findUnique({
      where: { id: transactionId },
    });

    if (!existingTxn) throw ApiError.notFound("Transaction not found");

    if (existingTxn.status === "SUCCESS")
      throw ApiError.badRequest("Transaction already completed");

    const updatedTxn = await tx.transaction.update({
      where: { id: transactionId },
      data: {
        status: status ?? existingTxn.status,
        netAmount: netAmount ?? existingTxn.netAmount,
        providerReference,
        providerResponse,
        retryCount,
        pricing,
        lastCheckedAt,
        processedAt: status ? new Date() : undefined,
        completedAt: status === "SUCCESS" ? new Date() : undefined,
      },
    });

    return updatedTxn;
  }
}
