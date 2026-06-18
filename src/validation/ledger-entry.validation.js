import { z } from "zod";

class LedgerEntryValidationSchemas {
  static get createLedgerEntry() {
    return z.object({
      walletId: z.uuid(),

      transactionId: z.uuid().optional(),

      entryType: z.enum(["DEBIT", "CREDIT"]),

      referenceType: z.string(),

      serviceProviderId: z.uuid().optional(),

      amount: z.number().positive(),

      narration: z.string(),

      createdBy: z.uuid(),

      idempotencyKey: z.string().optional(),

      metadata: z.any().optional(),
    });
  }

  static get ledgerEntryIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }

  static get getAllLedgerEntries() {
    return z.object({
      page: z.coerce.number().min(1).optional(),

      limit: z.coerce.number().min(1).max(100).optional(),

      walletId: z.uuid().optional(),

      transactionId: z.uuid().optional(),

      entryType: z.enum(["DEBIT", "CREDIT"]).optional(),
    });
  }
}

export default LedgerEntryValidationSchemas;
