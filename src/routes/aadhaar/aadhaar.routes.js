import { Router } from "express";
import { AadhaarController } from "../../controller/aahaar/aadhaar.controller.js";
import AuthMiddleware from "../../middleware/auth.middleware.js";

const aadhaarRoutes = Router();

// Send OTP (Business)
aadhaarRoutes.post(
  "/send-otp",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["business"]),
  AadhaarController.sendOtp
);

// Verify OTP (Business)
aadhaarRoutes.post(
  "/verify-otp",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["business"]),
  AadhaarController.verify
);

export default aadhaarRoutes;
