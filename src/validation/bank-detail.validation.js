import { z } from "zod";

class BankDetailValidationSchemas {
  // CREATE
  static get createBankDetail() {
    return z
      .object({
        accountHolder: z.string().trim().min(2).optional(),

        accountNumber: z
          .string()
          .trim()
          .min(6)
          .max(18)
          .regex(/^[0-9]+$/)
          .optional(),

        phoneNumber: z.string(),

        accountType: z.enum(["PERSONAL", "BUSINESS"]),

        ifscCode: z
          .string()
          .trim()
          .toUpperCase()
          .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/)
          .optional(),

        bankName: z.string().trim().min(2).optional(),

        isPrimary: z.preprocess(
          (value) => value === "true" || value === true,
          z.boolean()
        ),
      })

      .superRefine((data, ctx) => {
        const hasBankFields =
          data.accountHolder ||
          data.accountNumber ||
          data.ifscCode ||
          data.bankName;

        // AGAR EK DIYA HAI TO SAB REQUIRED
        if (hasBankFields) {
          if (!data.accountHolder) {
            ctx.addIssue({
              code: "custom",

              path: ["accountHolder"],

              message: "Account holder is required",
            });
          }

          if (!data.accountNumber) {
            ctx.addIssue({
              code: "custom",

              path: ["accountNumber"],

              message: "Account number is required",
            });
          }

          if (!data.ifscCode) {
            ctx.addIssue({
              code: "custom",

              path: ["ifscCode"],

              message: "IFSC code is required",
            });
          }

          if (!data.bankName) {
            ctx.addIssue({
              code: "custom",

              path: ["bankName"],

              message: "Bank name is required",
            });
          }
        }
      });
  }

  // UPDATE
  static get updateBankDetail() {
    return z
      .object({
        accountHolder: z.string().trim().min(2).optional(),

        phoneNumber: z.string().optional(),

        accountType: z.enum(["PERSONAL", "BUSINESS"]).optional(),

        ifscCode: z
          .string()
          .trim()
          .toUpperCase()
          .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/)
          .optional(),

        bankName: z.string().trim().min(2).optional(),

        accountNumber: z
          .string()
          .trim()
          .min(6)
          .max(18)
          .regex(/^[0-9]+$/)
          .optional(),

        status: z.enum(["PENDING", "VERIFIED", "REJECTED"]).optional(),

        bankRejectionReason: z.string().optional(),

        isPrimary: z.preprocess(
          (value) => value === "true" || value === true,
          z.boolean().optional()
        ),
      })

      .superRefine((data, ctx) => {
        const hasBankFields =
          data.accountHolder ||
          data.accountNumber ||
          data.ifscCode ||
          data.bankName;

        if (hasBankFields) {
          if (!data.accountHolder) {
            ctx.addIssue({
              code: "custom",

              path: ["accountHolder"],

              message: "Account holder is required",
            });
          }

          if (!data.accountNumber) {
            ctx.addIssue({
              code: "custom",

              path: ["accountNumber"],

              message: "Account number is required",
            });
          }

          if (!data.ifscCode) {
            ctx.addIssue({
              code: "custom",

              path: ["ifscCode"],

              message: "IFSC code is required",
            });
          }

          if (!data.bankName) {
            ctx.addIssue({
              code: "custom",

              path: ["bankName"],

              message: "Bank name is required",
            });
          }
        }
      });
  }
  // PARAMS
  static get bankDetailIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }

  // QUERY
  static get getAllBankDetails() {
    return z.object({
      page: z.coerce.number().min(1).optional(),
      limit: z.coerce.number().min(1).max(100).optional(),
      status: z.string().optional(),
      search: z.string().optional(),
    });
  }
}

export default BankDetailValidationSchemas;
