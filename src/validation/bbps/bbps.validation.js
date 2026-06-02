import { z } from "zod";

const billers = z.object({
  category: z.string(),
});

const billerDetails = z.object({
  billerId: z.string().min(3, "billerId required"),
});

const billFetch = z.object({
  clientReferenceId: z
    .string()
    .min(12, "clientReferenceId required length 12 digits"),

  billerId: z.string().min(3, "billerId required"),

  customerParams: z
    .array(
      z.object({
        name: z.string().min(1),
        value: z.union([z.string(), z.number(), z.boolean()]),
      })
    )
    .min(1, "customerParams required"),

  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Invalid mobile")
    .optional(),

  email: z.string().email().optional(),
});

const billPay = z.object({
  clientReferenceId: z.string().min(12),
  fetchId: z.string().min(3),
  amount: z.union([z.string(), z.number()]),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/)
    .optional(),
});

const BbpsValidation = {
  billers,
  billerDetails,
  billFetch,
  billPay,
};

export default BbpsValidation;
