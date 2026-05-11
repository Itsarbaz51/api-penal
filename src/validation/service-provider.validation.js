import { z } from "zod";

class ServiceProviderValidationSchemas {
  // CREATE
  static get createServiceProvider() {
    return z.object({
      serviceId: z.uuid(),

      providerId: z.uuid(),

      baseUrl: z.url().optional(),

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

      // PRICING
      mode: z.enum(["NONE", "COMMISSION", "SURCHARGE"]).optional(),

      pricingValueType: z.enum(["NONE", "FIXED", "PERCENTAGE"]).optional(),

      value: z.number().optional(),

      providerCost: z.number().optional(),

      // TAX
      applyTDS: z.boolean().optional(),

      tdsPercent: z.number().optional(),

      applyGST: z.boolean().optional(),

      gstPercent: z.number().optional(),

      // EXTRA
      handlePath: z.string().optional(),

      config: z.any().optional(),
    });
  }

  // UPDATE
  static get updateServiceProvider() {
    return this.createServiceProvider.partial();
  }

  // PARAMS
  static get serviceProviderIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }

  // QUERY
  static get getAllServiceProviders() {
    return z.object({
      page: z.coerce.number().min(1).optional(),

      limit: z.coerce.number().min(1).max(100).optional(),

      search: z.string().optional(),

      serviceId: z.uuid().optional(),

      providerId: z.uuid().optional(),

      isActive: z.coerce.boolean().optional(),
    });
  }
}

export default ServiceProviderValidationSchemas;
