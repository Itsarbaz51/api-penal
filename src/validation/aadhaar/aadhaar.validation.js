import { z } from "zod";

export const sendOtpSchema = z.object({
  aadhaarNumber: z
    .string({
      required_error: "Aadhaar number is required",
    })
    .trim()
    .regex(/^\d{12}$/, "Aadhaar number must be 12 digits"),
});

export const verifyOtpSchema = z.object({
  referenceId: z
    .string({
      required_error: "Reference ID is required",
    })
    .trim()
    .min(1, "Reference ID is required"),

  otp: z
    .string({
      required_error: "OTP is required",
    })
    .trim()
    .regex(/^\d{6}$/, "OTP must be 6 digits"),

  idempotencyKey: z
    .string({
      required_error: "Idempotency key is required",
    })
    .trim()
    .min(10, "Invalid idempotency key"),
});
