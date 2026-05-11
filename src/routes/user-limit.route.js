import { Router } from "express";

import UserLimitController from "../controller/user-limit.controller.js";

import UserLimitValidationSchemas from "../validation/user-limit.validation.js";

import ValidateRequest from "../middleware/validateRequest.middleware.js";

import AuthMiddleware from "../middleware/auth.middleware.js";

import asyncHandler from "../utils/AsyncHandler.js";

const route = Router();

// CREATE
route.post(
  "/",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    body: UserLimitValidationSchemas.createUserLimit,
  }),

  asyncHandler(UserLimitController.create)
);

// GET ALL
route.get(
  "/",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    query: UserLimitValidationSchemas.getAllUserLimits,
  }),

  asyncHandler(UserLimitController.getAll)
);

// UPDATE
route.patch(
  "/:id",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    params: UserLimitValidationSchemas.userLimitIdParam,
  }),

  ValidateRequest.validate({
    body: UserLimitValidationSchemas.updateUserLimit,
  }),

  asyncHandler(UserLimitController.update)
);

// DELETE
route.delete(
  "/:id",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    params: UserLimitValidationSchemas.userLimitIdParam,
  }),

  asyncHandler(UserLimitController.delete)
);

export default route;
