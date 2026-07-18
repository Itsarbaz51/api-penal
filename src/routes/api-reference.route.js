import { Router } from "express";
import ApiReferenceController from "../controller/api-reference.controller.js";
import ApiReferenceValidationSchemas from "../validation/api-reference.validation.js";
import ValidateRequest from "../middleware/validateRequest.middleware.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import asyncHandler from "../utils/AsyncHandler.js";

const route = Router();

// CREATE
route.post(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    body: ApiReferenceValidationSchemas.createApiReference,
  }),
  asyncHandler(ApiReferenceController.create)
);

// ADMIN LIST
route.get(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    query: ApiReferenceValidationSchemas.getAllApiReferences,
  }),
  asyncHandler(ApiReferenceController.getAll)
);

// PUBLIC DOCS (No Auth)
route.get(
  "/docs",
  ValidateRequest.validate({
    query: ApiReferenceValidationSchemas.getPublicApiReferences,
  }),
  asyncHandler(ApiReferenceController.getActive)
);

// GET BY ID
route.get(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    params: ApiReferenceValidationSchemas.apiReferenceIdParam,
  }),
  asyncHandler(ApiReferenceController.getById)
);

// UPDATE
route.patch(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    params: ApiReferenceValidationSchemas.apiReferenceIdParam,
  }),
  ValidateRequest.validate({
    body: ApiReferenceValidationSchemas.updateApiReference,
  }),
  asyncHandler(ApiReferenceController.update)
);

// DELETE
route.delete(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    params: ApiReferenceValidationSchemas.apiReferenceIdParam,
  }),
  asyncHandler(ApiReferenceController.delete)
);

export default route;
