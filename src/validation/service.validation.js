import { z } from "zod";

class ServiceValidationSchemas {
  // CREATE
  static get createService() {
    return z.object({
      name: z.string().min(2).max(100),

      code: z
        .string()
        .min(2)
        .max(50)
        .transform((val) => val.toUpperCase()),

      isActive: z.boolean().optional(),
    });
  }

  // UPDATE
  static get updateService() {
    return z.object({
      name: z.string().min(2).max(100).optional(),

      isActive: z.boolean().optional(),
    });
  }

  // QUERY
  static get getAllServices() {
    return z.object({
      page: z.coerce.number().min(1).optional(),

      limit: z.coerce.number().min(1).max(100).optional(),

      search: z.string().optional(),

      isActive: z.coerce.boolean().optional(),
    });
  }

  // PARAMS
  static get serviceIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }
}

export default ServiceValidationSchemas;
