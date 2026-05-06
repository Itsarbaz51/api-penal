import { z } from "zod";

class AuthValidationSchemas {
  static get login() {
    return z.object({
      identify: z
        .string()
        .min(1, "Email or username is required")
        .max(255, "Email or username is too long"),
      password: z
        .string()
        .min(1, "Password is required")
        .max(255, "Password is too long"),
      latitude: z
        .number()
        .min(-90, "Invalid latitude")
        .max(90, "Invalid latitude")
        .optional(),
      longitude: z
        .number()
        .min(-180, "Invalid longitude")
        .max(180, "Invalid longitude")
        .optional(),
      accuracy: z.number().min(0, "Accuracy must be positive").optional(),
    });
  }
}

export default AuthValidationSchemas;
