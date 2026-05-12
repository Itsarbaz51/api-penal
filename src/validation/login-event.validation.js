
import { z } from "zod";

class LoginEventValidationSchemas {
  // QUERY
  static get getAllLoginEvents() {
    return z.object({
      page: z.coerce.number().min(1).optional(),

      limit: z.coerce.number().min(1).max(100).optional(),

      userId: z.uuid().optional(),

      roleType: z.string().optional(),

      search: z.string().optional(),
    });
  }
}

export default LoginEventValidationSchemas;
