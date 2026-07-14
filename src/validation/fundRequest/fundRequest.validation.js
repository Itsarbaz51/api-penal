import { z } from "zod";
export default class FundRequestSchema {
  static get createFundRequestSchema() {
    z.object({
      amount: z.coerce.number().positive("Amount must be greater than zero"),

      rrn: z.string().trim().min(6).max(50),

      transactionDate: z.coerce.date(),

      idempotencyKey: z.string().trim().min(10).max(100),
    });
  }

  static get verifyFundRequestSchema() {
    z.object({
      transactionId: z.uuid(),

      action: z.enum(["APPROVE", "REJECT"]),

      reason: z.string().trim().optional(),
    }).superRefine((data, ctx) => {
      if (data.action === "REJECT" && !data.reason) {
        ctx.addIssue({
          code: "custom",
          path: ["reason"],
          message: "Reject reason required",
        });
      }
    });
  }

  static get checkStatusSchema() {
    z.object({
      transactionId: z.uuid(),
    });
  }
}
