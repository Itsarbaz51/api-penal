import { z } from "zod";

class PermissionValidationSchemas {
  // CREATE
  static get createPermission() {
    return z
      .object({
        scope: z.enum(["USER", "PACKAGE"]),

        userId: z.uuid().optional(),

        packageId: z.uuid().optional(),

        serviceId: z.uuid(),

        canView: z.boolean().optional(),

        canProcess: z.boolean().optional(),

        isActive: z.boolean().optional(),

        remarks: z.string().optional(),
      })

      .superRefine((data, ctx) => {
        // USER
        if (data.scope === "USER") {
          if (!data.userId) {
            ctx.addIssue({
              code: "custom",

              path: ["userId"],

              message: "userId is required",
            });
          }

          if (data.packageId) {
            ctx.addIssue({
              code: "custom",

              path: ["packageId"],

              message: "packageId not allowed",
            });
          }
        }

        // PACKAGE
        if (data.scope === "PACKAGE") {
          if (!data.packageId) {
            ctx.addIssue({
              code: "custom",

              path: ["packageId"],

              message: "packageId is required",
            });
          }

          if (data.userId) {
            ctx.addIssue({
              code: "custom",

              path: ["userId"],

              message: "userId not allowed",
            });
          }
        }
      });
  }

  // UPDATE
  static get updatePermission() {
    return z.object({
      canView: z.boolean().optional(),

      canProcess: z.boolean().optional(),

      isActive: z.boolean().optional(),

      remarks: z.string().optional(),
    });
  }

  // PARAMS
  static get permissionIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }

  // QUERY
  static get getAllPermissions() {
    return z.object({
      page: z.coerce.number().min(1).optional(),

      limit: z.coerce.number().min(1).max(100).optional(),

      scope: z.enum(["USER", "PACKAGE"]).optional(),

      userId: z.uuid().optional(),

      packageId: z.uuid().optional(),

      serviceId: z.uuid().optional(),
    });
  }
}

export default PermissionValidationSchemas;
