import { Router } from "express";
import ApiKeyProviderMappingController from "../controller/api-key-provider-mapping.controller.js";
import ApiKeyProviderMappingValidationSchemas from "../validation/api-key-provider-mapping.validation.js";
import ValidateRequest from "../middleware/validateRequest.middleware.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import asyncHandler from "../utils/AsyncHandler.js";

const route = Router();

// CREATE
route.post(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    body: ApiKeyProviderMappingValidationSchemas.createMapping,
  }),
  asyncHandler(ApiKeyProviderMappingController.create)
);

// GET ALL
route.get(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    query: ApiKeyProviderMappingValidationSchemas.getAllMappings,
  }),
  asyncHandler(ApiKeyProviderMappingController.getAll)
);

// UPDATE
route.patch(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    params: ApiKeyProviderMappingValidationSchemas.mappingIdParam,
  }),
  ValidateRequest.validate({
    body: ApiKeyProviderMappingValidationSchemas.updateMapping,
  }),
  asyncHandler(ApiKeyProviderMappingController.update)
);

// DELETE
route.delete(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    params: ApiKeyProviderMappingValidationSchemas.mappingIdParam,
  }),
  asyncHandler(ApiKeyProviderMappingController.delete)
);

export default route;
