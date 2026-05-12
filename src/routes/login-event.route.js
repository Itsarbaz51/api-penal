import { Router } from "express";

import LoginEventController from "../controller/login-event.controller.js";

import LoginEventValidationSchemas from "../validation/login-event.validation.js";

import ValidateRequest from "../middleware/validateRequest.middleware.js";

import AuthMiddleware from "../middleware/auth.middleware.js";

import asyncHandler from "../utils/AsyncHandler.js";

const route = Router();

// GET ALL
route.get(
  "/",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    query: LoginEventValidationSchemas.getAllLoginEvents,
  }),

  asyncHandler(LoginEventController.getAll)
);

export default route;
