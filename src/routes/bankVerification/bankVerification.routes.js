import { Router } from "express";

import { BankVerificationController } from "../../controller/bankVerification/bankVerification.controller.js";

import AuthMiddleware from "../../middleware/auth.middleware.js";
import ApiKeyMiddleware from "../../middleware/apiKey.middleware.js";
import ValidateRequest from "../../middleware/validateRequest.middleware.js";
import ApiKeyValidationSchemas from "../../validation/bankVerification/bankVerification.validation.js";

const bankVerificationRoutes = Router();

bankVerificationRoutes.post(
  "/penny-drop",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["API_HOLDER"]),
  ApiKeyMiddleware.verify,
  ValidateRequest.validate({
    body: ApiKeyValidationSchemas.pennyDropSchema,
  }),
  BankVerificationController.pennyDrop
);

// bankVerificationRoutes.post(
//   "/penny-less",
//   AuthMiddleware.isAuthenticated,
//   AuthMiddleware.authorize(["API_HOLDER"]),
//   ApiKeyMiddleware.verify,
//   ValidateRequest.validate({
//     body: pennyLessSchema,
//   }),
//   BankVerificationController.pennyLess
// );

export default bankVerificationRoutes;
