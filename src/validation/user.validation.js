import { z } from "zod";

class UserValidationSchemas {
  static get createUser() {
    return z.object({
      fullName: z.string().min(2).max(100),
      companyName: z.string().min(2).max(150),
      companyType: z.string().min(2).max(100),
      email: z.email(),
      phoneNumber: z.string().min(10).max(15),
      packageId: z.string().optional(),
    });
  }

  static get updateUser() {
    return z.object({
      fullName: z.string().min(2).max(100).optional(),
      companyName: z.string().min(2).max(150).optional(),
      companyType: z.string().min(2).max(100).optional(),
      profileImage: z.string().optional(),
      email: z.email().optional(),
      phoneNumber: z.string().min(10).max(15).optional(),
      role: z.enum(["API_HOLDER"]).optional(),
      packageId: z.string().optional(),
      status: z.enum(["ACTIVE", "INACTIVE", "BLOCKED"]).optional(),
    });
  }

  static get userIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }
}

export default UserValidationSchemas;
