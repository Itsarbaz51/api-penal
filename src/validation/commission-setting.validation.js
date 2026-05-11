import { z } from "zod";

class CommissionSettingValidationSchemas {
  // CREATE
  static get createCommissionSetting() {
    return z.object({
      // TARGET
      scope: z.enum(["USER", "PACKAGE"]).optional(),
      targetUserId: z.uuid().optional(),
      packageId: z.uuid().optional(),
      serviceProviderId: z.uuid().optional(),

      // BASIC
      isActive: z.boolean().optional(),
      supportsSlab: z.boolean().optional(),
      supportPaymentMethod: z.boolean().optional(),

      // PAYMENT GATEWAY
      paymentMethod: z.string().optional(),
      network: z.string().optional(),

      // BBPS / RECHARGE
      category: z.string().optional(),
      operator: z.string().optional(),
      operatorCode: z.string().optional(),

      // DMT / PAYOUT
      bankCode: z.string().optional(),
      transactionType: z.string().optional(),

      // SLAB
      minAmount: z.number().optional(),
      maxAmount: z.number().optional(),

      // COMMISSION
      mode: z.enum(["NONE", "COMMISSION", "SURCHARGE"]).optional(),
      type: z.enum(["NONE", "FIXED", "PERCENTAGE"]).optional(),
      value: z.number(),

      // TAX
      applyTDS: z.boolean().optional(),
      tdsPercent: z.number().optional(),
      applyGST: z.boolean().optional(),
      gstPercent: z.number().optional(),

      // EXTRA
      config: z.any().optional(),
    });
  }

  // UPDATE
  static get updateCommissionSetting() {
    return this.createCommissionSetting.partial();
  }

  // PARAMS
  static get commissionSettingIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }

  // QUERY
  static get getAllCommissionSettings() {
    return z.object({
      page: z.coerce.number().min(1).optional(),

      limit: z.coerce.number().min(1).max(100).optional(),

      search: z.string().optional(),

      targetUserId: z.uuid().optional(),

      serviceProviderId: z.uuid().optional(),

      isActive: z.coerce.boolean().optional(),
    });
  }
}

export default CommissionSettingValidationSchemas;
