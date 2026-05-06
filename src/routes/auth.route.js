import { Router } from "express";
import ValidateRequest from "../middleware/validateRequest.middleware.js";
import AuthValidationSchemas from "../validation/auth.validation.js";
import AuthController from "../controller/auth.controller.js";
import asyncHandler from "../utils/AsyncHandler.js";

const route = Router();

route.post(
  "/login",
  ValidateRequest.validate(AuthValidationSchemas.login),
  asyncHandler(AuthController.login)
);

export default route;
