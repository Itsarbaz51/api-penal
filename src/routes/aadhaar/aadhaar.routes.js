import { Router } from "express";
import { AadhaarController } from "../../controller/aahaar/aadhaar.controller.js";
import AuthMiddleware from "../../middleware/auth.middleware.js";
import ValidateRequest from "../../middleware/validateRequest.middleware.js";
import {
  sendOtpSchema,
  verifyOtpSchema,
} from "../../validation/aadhaar/aadhaar.validation.js";
import ApiKeyMiddleware from "../../middleware/apiKey.middleware.js";

const aadhaarRoutes = Router();

aadhaarRoutes.post(
  "/send-otp",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["API_HOLDER"]),
  ApiKeyMiddleware.verify,
  ValidateRequest.validate({ body: sendOtpSchema }),
  AadhaarController.sendOtp
);

aadhaarRoutes.post(
  "/verify-otp",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["API_HOLDER"]),
  ValidateRequest.validate({ body: verifyOtpSchema }),
  AadhaarController.verify
);

export default aadhaarRoutes;
