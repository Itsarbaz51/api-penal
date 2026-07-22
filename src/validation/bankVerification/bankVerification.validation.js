import { z } from "zod";
class ApiKeyValidationSchemas {
  static get pennyDropSchema() {
    return z.object({
      beneficiaryAccountNo: z.string(),
      beneficiaryIfscCode: z.string(),
      requestId: z.string(),
      referenceNumber: z.string(),
      idempotencyKey: z.uuid(),
    });
  }
  static get pennyLessSchema() {
    return z.object({
      beneficiaryAccountNo: z.string(),
      beneficiaryIfscCode: z.string(),
      requestId: z.string(),
      referenceNumber: z.string(),
      idempotencyKey: z.uuid(),
    });
  }
}

export default ApiKeyValidationSchemas;
