import { Router } from "express";

import FundRequestController from "../../controller/fundRequest/fundRequest.controller.js";

import AuthMiddleware from "../../middleware/auth.middleware.js";
import ApiKeyMiddleware from "../../middleware/apiKey.middleware.js";
import ValidateRequest from "../../middleware/validateRequest.middleware.js";
import upload from "../../middleware/multer.middleware.js";
import FundRequestSchema from "../../validation/fundRequest/fundRequest.validation.js";

const route = Router();

// CREATE
route.post(
  "/",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["API_HOLDER"]),
  upload.single("paymentImage"),
  ValidateRequest.validate({
    body: FundRequestSchema.createFundRequestSchema,
  }),
  FundRequestController.create
);

// VERIFY
route.post(
  "/verify",
  AuthMiddleware.isAuthenticated,
  AuthMiddleware.authorize(["SUPER_ADMIN"]),
  ValidateRequest.validate({
    body: FundRequestSchema.verifyFundRequestSchema,
  }),
  FundRequestController.verify
);

// STATUS
route.post(
  "/status",
  AuthMiddleware.isAuthenticated,
  ApiKeyMiddleware.verify,
  ValidateRequest.validate({
    body: FundRequestSchema.checkStatusSchema,
  }),
  FundRequestController.checkStatus
);

export default route;
