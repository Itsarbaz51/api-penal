import { Router } from "express";
import ValidateRequest from "../middleware/validateRequest.middleware.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import asyncHandler from "../utils/AsyncHandler.js";
import ProviderController from "../controller/provider.controller.js";
import ProviderValidationSchemas from "../validation/provider.validation.js";

const route = Router();

// CREATE
route.post(
  "/",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["SUPER_ADMIN"]),
  ValidateRequest.validate({
    body: ProviderValidationSchemas.createProvider,
  }),
  asyncHandler(ProviderController.create)
);

// GET ALL
route.get(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    query: ProviderValidationSchemas.getAllProviders,
  }),
  asyncHandler(ProviderController.getAll)
);

// UPDATE
route.patch(
  "/:id",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["SUPER_ADMIN"]),
  ValidateRequest.validate({
    params: ProviderValidationSchemas.providerIdParam,
  }),
  ValidateRequest.validate({
    body: ProviderValidationSchemas.updateProvider,
  }),
  asyncHandler(ProviderController.update)
);

// DELETE
route.delete(
  "/:id",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["SUPER_ADMIN"]),
  ValidateRequest.validate({
    params: ProviderValidationSchemas.providerIdParam,
  }),
  asyncHandler(ProviderController.delete)
);

export default route;
