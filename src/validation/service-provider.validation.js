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

      paymentMethod: z.string().nullable().optional(),
      network: z.string().nullable().optional(),
      category: z.string().nullable().optional(),
      operator: z.string().nullable().optional(),
      operatorCode: z.string().nullable().optional(),
      bankCode: z.string().nullable().optional(),
      transactionType: z.string().nullable().optional(),

      // SLAB
      minAmount: z.number().optional(),

      maxAmount: z.number().optional(),

      // PRICING
      mode: z.enum(["NONE", "COMMISSION", "SURCHARGE"]).optional(),

      pricingValueType: z.enum(["NONE", "FLAT", "PERCENTAGE"]).optional(),
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
