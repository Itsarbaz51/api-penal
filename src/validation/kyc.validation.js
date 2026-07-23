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
    return z.object({
      fullName: z.string(),
      dob: z.coerce.date(),
      gender: z.enum(["MALE", "FEMALE", "OTHER"]),
      email: z.email(),
      phoneNumber: z.string(),
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
    });
  }
}

export default KycValidationSchemas;
