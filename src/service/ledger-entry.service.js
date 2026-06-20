import { ApiError } from "../utils/ApiError.js";

export default class LedgerEntryService {
  static async create(
    tx,
    {
      walletId,
      transactionId,
      entryType,
      referenceType,
      amount,
      narration,
      createdBy,
      serviceProviderId = null,
      metadata = null,
      idempotencyKey = null,
    }
  ) {
    const wallet = await tx.wallet.findUnique({
      where: { id: walletId },
    });

    if (!wallet) {
      throw ApiError.notFound("Wallet not found");
    }

    if (idempotencyKey) {
      const existing = await tx.ledgerEntry.findUnique({
        where: {
          idempotencyKey,
        },
      });

      if (existing) {
        return existing;
      }
    }

    return tx.ledgerEntry.create({
      data: {
        walletId,
        transactionId,
        entryType,
        referenceType,
        amount: Number(amount),
        runningBalance: Number(wallet.balance),
        narration,
        createdBy,
        serviceProviderId,
        metadata,
        idempotencyKey,
      },
    });
  }
}
