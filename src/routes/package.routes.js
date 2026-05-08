import { Router } from "express";
import PackageController from "../controller/package.controller.js";
import PackageValidationSchemas from "../validation/package.validation.js";
import ValidateRequest from "../middleware/validateRequest.middleware.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import asyncHandler from "../utils/AsyncHandler.js";

const route = Router();

route.post(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({ body: PackageValidationSchemas.createPackage }),
  asyncHandler(PackageController.create)
);

route.get(
  "/",
  AuthMiddleware.isAuthenticated,
  asyncHandler(PackageController.getAll)
);

route.patch(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({ params: PackageValidationSchemas.packageIdParam }),
  ValidateRequest.validate({ body: PackageValidationSchemas.updatePackage }),
  asyncHandler(PackageController.update)
);

route.delete(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({ params: PackageValidationSchemas.packageIdParam }),
  asyncHandler(PackageController.delete)
);

export default route;
