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

  static get forgotPassword() {
    return z.object({
      email: z.email(),
    });
  }

  static get resetPasswordToken() {
    return z
      .object({
        token: z.string(),

        password: z.string().min(6),

        confirmPassword: z.string(),
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",

        path: ["confirmPassword"],
      });
  }

  static get resetPassword() {
    return z
      .object({
        oldPassword: z.string().min(6),

        newPassword: z.string().min(6),

        confirmPassword: z.string().min(6),
      })
      .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
  }

  static get resetPin() {
    return z
      .object({
        oldPin: z.string().length(4),

        newPin: z.string().length(4),

        confirmPin: z.string().length(4),
      })
      .refine((data) => data.newPin === data.confirmPin, {
        message: "Pins do not match",
        path: ["confirmPin"],
      });
  }
}

export default AuthValidationSchemas;
