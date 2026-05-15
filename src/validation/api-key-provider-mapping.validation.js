import { z } from "zod";

class ApiKeyProviderMappingValidationSchemas {
  // CREATE
  static get createMapping() {
    return z.object({
      apiKeyId: z.uuid(),
      serviceId: z.uuid(),
      providerId: z.uuid(),
      priority: z.coerce.number().min(1).optional(),
      isActive: z.boolean().optional(),
    });
  }

  // UPDATE
  static get updateMapping() {
    return z.object({
      priority: z.coerce.number().min(1).optional(),

      isActive: z.boolean().optional(),
    });
  }

  // PARAMS
  static get mappingIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }

  // QUERY
  static get getAllMappings() {
    return z.object({
      page: z.coerce.number().min(1).optional(),

      limit: z.coerce.number().min(1).max(100).optional(),

      apiKeyId: z.uuid().optional(),

      serviceId: z.uuid().optional(),

      providerId: z.uuid().optional(),

      isActive: z.coerce.boolean().optional(),
    });
  }
}

export default ApiKeyProviderMappingValidationSchemas;
