import { z } from "zod";

class ApiKeyValidationSchemas {
  // CREATE
  static get createApiKey() {
    return z.object({
      userId: z.uuid(),
      name: z.string().min(2).max(100).optional(),
      allowedIps: z.array(z.ipv4()).optional(),
      maxIpLimit: z.number().min(1).max(100).optional(),
      callbackUrl: z.url().optional(),
      requestsPerMinute: z.number().min(1).optional(),
      requestsPerDay: z.number().min(1).optional(),
      isActive: z.boolean().optional(),
      expiresAt: z.coerce.date().optional(),
      remarks: z.string().optional(),
    });
  }

  // UPDATE
  static get updateApiKey() {
    return z.object({
      // USER EDITABLE
      allowedIps: z.array(z.ipv4()).optional(),
      callbackUrl: z.url().optional(),

      // SUPER ADMIN ONLY
      name: z.string().min(2).max(100).optional(),
      maxIpLimit: z.number().min(1).max(100).optional(),
      requestsPerMinute: z.number().min(1).optional(),
      requestsPerDay: z.number().min(1).optional(),
      isActive: z.boolean().optional(),
      expiresAt: z.coerce.date().optional(),
      remarks: z.string().optional(),
    });
  }

  // PARAMS
  static get apiKeyIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }

  // QUERY
  static get getAllApiKeys() {
    return z.object({
      page: z.coerce.number().min(1).optional(),
      limit: z.coerce.number().min(1).max(100).optional(),
      userId: z.uuid().optional(),
      isActive: z.coerce.boolean().optional(),
      search: z.string().optional(),
    });
  }
}

export default ApiKeyValidationSchemas;
