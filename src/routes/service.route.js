import { Router } from "express";
import ServiceProviderController from "../controller/service.controller.js";
import ServiceValidationSchemas from "../validation/service.validation.js";
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
    body: ServiceValidationSchemas.createService,
  }),
  asyncHandler(ServiceProviderController.create)
);

// GET ALL
route.get(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    query: ServiceValidationSchemas.getAllServices,
  }),
  asyncHandler(ServiceProviderController.getAll)
);

// UPDATE
route.patch(
  "/:id",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["SUPER_ADMIN"]),
  ValidateRequest.validate({
    params: ServiceValidationSchemas.serviceIdParam,
  }),
  ValidateRequest.validate({
    body: ServiceValidationSchemas.updateService,
  }),
  asyncHandler(ServiceProviderController.update)
);

// DELETE
route.delete(
  "/:id",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["SUPER_ADMIN"]),
  ValidateRequest.validate({
    params: ServiceValidationSchemas.serviceIdParam,
  }),
  asyncHandler(ServiceProviderController.delete)
);

export default route;
