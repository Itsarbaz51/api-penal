import { z } from "zod";

class ApiReferenceValidationSchemas {
  // CREATE
  static get createApiReference() {
    return z.object({
      name: z.string().min(2).max(100),
      module: z.string().min(2),
      method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]),
      endpoint: z.string().min(1),
      description: z.string().optional(),
      authType: z.string().optional(),
      headers: z.any().optional(),
      queryParams: z.any().optional(),
      pathParams: z.any().optional(),
      requestFields: z.any().optional(),
      sampleRequest: z.any().optional(),
      sampleResponse: z.any().optional(),
      responseFields: z.any().optional(),
      errorResponses: z.any().optional(),
      tags: z.any().optional(),
      version: z.string().optional(),
      baseUrl: z.string().optional(),
      contentType: z.string().optional(),
      sortOrder: z.number().optional(),
      isActive: z.boolean().optional(),
    });
  }

  // UPDATE
  static get updateApiReference() {
    return this.createApiReference.partial();
  }

  // PARAMS
  static get apiReferenceIdParam() {
    return z.object({
      id: z.uuid(),
    });
  }

  // QUERY
  static get getAllApiReferences() {
    return z.object({
      page: z.coerce.number().min(1).optional(),
      limit: z.coerce.number().min(1).max(100).optional(),
      module: z.string().optional(),
      isActive: z.coerce.boolean().optional(),
      search: z.string().optional(),
    });
  }

  static get getPublicApiReferences() {
    return z.object({
      module: z.string().optional(),
      search: z.string().optional(),
    });
  }
}

export default ApiReferenceValidationSchemas;
