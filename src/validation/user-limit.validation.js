import { z } from "zod";

const userLimitBaseSchema = z
  .object({
    userId: z.uuid().optional(),

    packageId: z.uuid().optional(),

    dailyLimit: z.number().optional(),

    monthlyLimit: z.number().optional(),

    perTxnLimit: z.number().optional(),
  })

  .refine(
    (data) =>
      (data.userId && !data.packageId) || (!data.userId && data.packageId),

    {
      message: "Either userId or packageId is required, but not both",

      path: ["userId"],
    }
  );

class UserLimitValidationSchemas {
  // CREATE
  static get createUserLimit() {
    return userLimitBaseSchema;
  }

  // UPDATE
  static get updateUserLimit() {
    return z.object({
      userId: z.uuid().optional(),

      packageId: z.uuid().optional(),

      dailyLimit: z.number().optional(),

      monthlyLimit: z.number().optional(),

      perTxnLimit: z.number().optional(),
    });
  }

  // PARAMS
  static get userLimitIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }

  // QUERY
  static get getAllUserLimits() {
    return z.object({
      page: z.coerce.number().min(1).optional(),

      limit: z.coerce.number().min(1).max(100).optional(),

      userId: z.uuid().optional(),

      packageId: z.uuid().optional(),
    });
  }
}

export default UserLimitValidationSchemas;
