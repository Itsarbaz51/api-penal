import { z } from "zod";

class KycValidationSchemas {
  static documentSchema = z.object({
    type: z.string().min(2),
    fileUrl: z.string().optional(), // Create ke time file upload hoga
    documentNumber: z.string().optional(),
    remarks: z.string().optional(),
  });

  static addressSchema = z.object({
    type: z.string(),
    address: z.string(),
    pinCode: z.string(),
    state: z.string(),
    city: z.string(),
    landmark: z.string(),
  });

  static get createKyc() {
    return z
      .object({
        fullName: z.string(),
        dob: z.coerce
          .date()
          .optional()
          .refine(
            (dob) => {
              if (!dob) return true; // allow undefined

              const today = new Date();
              const minDate = new Date(
                today.getFullYear() - 18,
                today.getMonth(),
                today.getDate()
              );

              return dob <= minDate;
            },
            {
              message: "You must be at least 18 years old",
            }
          ),
        gender: z.enum(["MALE", "FEMALE", "OTHER"]),
        email: z.email(),
        phoneNumber: z
          .string()
          .regex(/^\+?[1-9]\d{9,14}$/, "Invalid phone number"),
        companyName: z.string(),
        businessType: z.string(),
        kycType: z.string(),
        remarks: z.string().optional(),
        metadata: z.any().optional(),

        addresses: z.preprocess((val) => {
          if (typeof val === "string") {
            return JSON.parse(val);
          }
          return val;
        }, z.array(this.addressSchema)),

        documents: z.preprocess((val) => {
          if (typeof val === "string") {
            return JSON.parse(val);
          }
          return val;
        }, z.array(this.documentSchema)),
      })
      .superRefine((data, ctx) => {
        if (!data.email && !data.phoneNumber) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Either email or phone number is required",
            path: ["email"],
          });
        }
      });
  }

  static get updateKyc() {
    return z.object({
      fullName: z.string().optional(),
      dob: z.coerce
        .date()
        .optional()
        .refine(
          (dob) => {
            if (!dob) return true; // allow undefined

            const today = new Date();
            const minDate = new Date(
              today.getFullYear() - 18,
              today.getMonth(),
              today.getDate()
            );

            return dob <= minDate;
          },
          {
            message: "You must be at least 18 years old",
          }
        ),
      gender: z.enum(["MALE", "FEMALE", "OTHER"]).optional(),
      email: z.email().optional(),
      phoneNumber: z
        .string()
        .regex(/^\+?[1-9]\d{9,14}$/, "Invalid phone number")
        .optional(),
      companyName: z.string().optional(),
      businessType: z.string().optional(),
      kycType: z.string().optional(),
      remarks: z.string().optional(),
      metadata: z.any().optional(),

      addresses: z.preprocess((val) => {
        if (typeof val === "string") return JSON.parse(val);
        return val;
      }, z.array(this.addressSchema).optional()),

      documents: z.preprocess((val) => {
        if (typeof val === "string") return JSON.parse(val);
        return val;
      }, z.array(this.documentSchema).optional()),

      status: z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
      rejectionReason: z.string().optional(),
    });
  }

  static get kycIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }
}

export default KycValidationSchemas;
