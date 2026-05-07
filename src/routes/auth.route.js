import { Router } from "express";
import ValidateRequest from "../middleware/validateRequest.middleware.js";
import AuthValidationSchemas from "../validation/auth.validation.js";
import AuthController from "../controller/auth.controller.js";
import asyncHandler from "../utils/AsyncHandler.js";
import AuthMiddleware from "../middleware/auth.middleware.js";

const route = Router();

route.post(
  "/login",
  ValidateRequest.validate(AuthValidationSchemas.login),
  asyncHandler(AuthController.login)
);

route.post(
  "/forgot-password",
  ValidateRequest.validate(AuthValidationSchemas.forgotPassword),
  asyncHandler(AuthController.forgotPassword)
);

route.post(
  "/reset-password-token",
  ValidateRequest.validate(AuthValidationSchemas.resetPasswordToken),
  asyncHandler(AuthController.resetPasswordToken)
);

route.post(
  "/reset-password",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate(AuthValidationSchemas.resetPassword),
  asyncHandler(AuthController.resetPassword)
);

route.post(
  "/reset-pin",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate(AuthValidationSchemas.resetPin),
  asyncHandler(AuthController.resetPin)
);

route.get("/", AuthMiddleware.isAuthenticated, asyncHandler(AuthController.me));

export default route;
