import { Router } from "express";
import PermissionController from "../controller/permission.controller.js";
import PermissionValidationSchemas from "../validation/permission.validation.js";
import ValidateRequest from "../middleware/validateRequest.middleware.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import asyncHandler from "../utils/AsyncHandler.js";

const route = Router();

// CREATE
route.post(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    body: PermissionValidationSchemas.createPermission,
  }),
  asyncHandler(PermissionController.create)
);

// GET ALL
route.get(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    query: PermissionValidationSchemas.getAllPermissions,
  }),
  asyncHandler(PermissionController.getAll)
);

route.get(
  "/my",
  AuthMiddleware.isAuthenticated,
  asyncHandler(PermissionController.myPermissions)
);

// UPDATE
route.patch(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    params: PermissionValidationSchemas.permissionIdParam,
  }),
  ValidateRequest.validate({
    body: PermissionValidationSchemas.updatePermission,
  }),
  asyncHandler(PermissionController.update)
);

// DELETE
route.delete(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    params: PermissionValidationSchemas.permissionIdParam,
  }),
  asyncHandler(PermissionController.delete)
);

export default route;
