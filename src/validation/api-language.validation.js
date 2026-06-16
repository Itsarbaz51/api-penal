import { z } from "zod";

class ApiLanguageValidationSchemas {
  // CREATE
  static get createApiLanguage() {
    return z.object({
      name: z.string().min(2).max(50),

      slug: z
        .string()
        .min(2)
        .max(50)
        .regex(/^[a-z0-9-_]+$/),

      template: z.string().min(1),

      isActive: z.boolean().optional(),
    });
  }

  // UPDATE
  static get updateApiLanguage() {
    return this.createApiLanguage.partial();
  }

  // PARAMS
  static get apiLanguageIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }

  // QUERY
  static get getAllApiLanguages() {
    return z.object({
      page: z.coerce.number().min(1).optional(),

      limit: z.coerce.number().min(1).max(100).optional(),

      search: z.string().optional(),

      isActive: z.coerce.boolean().optional(),
    });
  }
}

export default ApiLanguageValidationSchemas;