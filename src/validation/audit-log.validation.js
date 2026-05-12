import { z } from "zod";

class AuditLogValidationSchemas {
  // QUERY
  static get getAllAuditLogs() {
    return z.object({
      page: z.coerce.number().min(1).optional(),

      limit: z.coerce.number().min(1).max(100).optional(),

      userId: z.uuid().optional(),

      module: z.string().optional(),

      action: z.string().optional(),

      status: z.string().optional(),

      search: z.string().optional(),
    });
  }
}

export default AuditLogValidationSchemas;
