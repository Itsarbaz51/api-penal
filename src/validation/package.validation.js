import { z } from "zod";

class PackageValidationSchemas {
  static get createPackage() {
    return z.object({
      name: z.string().min(2).max(100),
    });
  }

  static get updatePackage() {
    return z.object({
      name: z.string().min(2).max(100).optional(),
    });
  }

  static get packageIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }
}

export default PackageValidationSchemas;
