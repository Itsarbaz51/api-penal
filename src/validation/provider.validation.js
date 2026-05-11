import { z } from "zod";

class ProviderValidationSchemas {
  // CREATE
  static get createProvider() {
    return z.object({
      name: z.string().min(2).max(100),

      code: z
        .string()
        .min(2)
        .max(50)
        .transform((val) => val.toUpperCase()),

      type: z
        .string()
        .min(2)
        .max(50)
        .transform((val) => val.toUpperCase())
        .optional(),

      isActive: z.boolean().optional(),
    });
  }

  // UPDATE
  static get updateProvider() {
    return z.object({
      name: z.string().min(2).max(100).optional(),

      type: z
        .string()
        .min(2)
        .max(50)
        .transform((val) => val.toUpperCase())
        .optional(),

      isActive: z.boolean().optional(),
    });
  }

  // QUERY
  static get getAllProviders() {
    return z.object({
      page: z.coerce.number().min(1).optional(),

      limit: z.coerce.number().min(1).max(100).optional(),

      search: z.string().optional(),

      isActive: z.coerce.boolean().optional(),

      type: z.string().optional(),
    });
  }

  // PARAMS
  static get providerIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }
}

export default ProviderValidationSchemas;
