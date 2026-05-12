import { z } from "zod";

class KycValidationSchemas {
  // DOCUMENT
  static documentSchema = z.object({
    type: z.string().min(2),
    fileUrl: z.string().min(3),
    documentNumber: z.string().optional(),
    remarks: z.string().optional(),
  });

  // ADDRESS
  static addressSchema = z.object({
    type: z.string(),
    address: z.string(),
    pinCode: z.string(),
    state: z.string(),
    city: z.string(),
    landmark: z.string(),
  });

  // CREATE
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
      addresses: z.array(this.addressSchema),
      documents: z.array(this.documentSchema),
    });
  }

  // UPDATE
  static get updateKyc() {
    return z.object({
      fullName: z.string().optional(),
      dob: z.coerce.date().optional(),
      gender: z.enum(["MALE", "FEMALE", "OTHER"]).optional(),
      email: z.email().optional(),
      phoneNumber: z.string().optional(),
      companyName: z.string().optional(),
      businessType: z.string().optional(),
      status: z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
      rejectionReason: z.string().optional(),
      remarks: z.string().optional(),
      metadata: z.any().optional(),
    });
  }

  // PARAMS
  static get kycIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }

  // QUERY
  static get getAllKyc() {
    return z.object({
      page: z.coerce.number().min(1).optional(),
      limit: z.coerce.number().min(1).max(100).optional(),
      status: z.string().optional(),
      search: z.string().optional(),
    });
  }
}

export default KycValidationSchemas;
