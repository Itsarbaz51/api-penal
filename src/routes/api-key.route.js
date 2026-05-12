import { Router } from "express";

import ApiKeyController from "../controller/api-key.controller.js";

import ApiKeyValidationSchemas from "../validation/api-key.validation.js";

import ValidateRequest from "../middleware/validateRequest.middleware.js";

import AuthMiddleware from "../middleware/auth.middleware.js";

import asyncHandler from "../utils/AsyncHandler.js";

const route = Router();

// CREATE
route.post(
  "/",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    body: ApiKeyValidationSchemas.createApiKey,
  }),

  asyncHandler(ApiKeyController.create)
);

// GET ALL
route.get(
  "/",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    query: ApiKeyValidationSchemas.getAllApiKeys,
  }),

  asyncHandler(ApiKeyController.getAll)
);

route.get(
  "/:userId/credentials",
  AuthMiddleware.isAuthenticated,

  asyncHandler(ApiKeyController.getCredentials)
);

// UPDATE
route.patch(
  "/:id",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    params: ApiKeyValidationSchemas.apiKeyIdParam,
  }),

  ValidateRequest.validate({
    body: ApiKeyValidationSchemas.updateApiKey,
  }),

  asyncHandler(ApiKeyController.update)
);

// DELETE
route.delete(
  "/:id",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    params: ApiKeyValidationSchemas.apiKeyIdParam,
  }),

  asyncHandler(ApiKeyController.delete)
);

export default route;
