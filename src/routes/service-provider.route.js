import { Router } from "express";
import ServiceProviderController from "../controller/service-provider.controller.js";
import ServiceProviderValidationSchemas from "../validation/service-provider.validation.js";
import ValidateRequest from "../middleware/validateRequest.middleware.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import asyncHandler from "../utils/AsyncHandler.js";

const route = Router();

// CREATE
route.post(
  "/",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["SUPER_ADMIN"]),
  ValidateRequest.validate({
    body: ServiceProviderValidationSchemas.createServiceProvider,
  }),
  asyncHandler(ServiceProviderController.create)
);

// GET ALL
route.get(
  "/",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["SUPER_ADMIN"]),
  ValidateRequest.validate({
    query: ServiceProviderValidationSchemas.getAllServiceProviders,
  }),
  asyncHandler(ServiceProviderController.getAll)
);

// UPDATE
route.patch(
  "/:id",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["SUPER_ADMIN"]),
  ValidateRequest.validate({
    params: ServiceProviderValidationSchemas.serviceProviderIdParam,
  }),
  ValidateRequest.validate({
    body: ServiceProviderValidationSchemas.updateServiceProvider,
  }),
  asyncHandler(ServiceProviderController.update)
);

// DELETE
route.delete(
  "/:id",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["SUPER_ADMIN"]),
  ValidateRequest.validate({
    params: ServiceProviderValidationSchemas.serviceProviderIdParam,
  }),
  asyncHandler(ServiceProviderController.delete)
);

export default route;
