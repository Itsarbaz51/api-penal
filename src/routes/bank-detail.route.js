import { Router } from "express";

import BankDetailController from "../controller/bank-detail.controller.js";

import BankDetailValidationSchemas from "../validation/bank-detail.validation.js";

import ValidateRequest from "../middleware/validateRequest.middleware.js";

import AuthMiddleware from "../middleware/auth.middleware.js";

import asyncHandler from "../utils/AsyncHandler.js";

import upload from "../middleware/multer.middleware.js";

const route = Router();

// CREATE
route.post(
  "/",

  AuthMiddleware.isAuthenticated,
  upload.single("bankProofFile"),
  ValidateRequest.validate({
    body: BankDetailValidationSchemas.createBankDetail,
  }),
  asyncHandler(BankDetailController.create)
);

// GET ALL
route.get(
  "/",

  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    query: BankDetailValidationSchemas.getAllBankDetails,
  }),

  asyncHandler(BankDetailController.getAll)
);

// UPDATE
route.patch(
  "/:id",

  AuthMiddleware.isAuthenticated,

  upload.single("bankProofFile"),

  ValidateRequest.validate({
    params: BankDetailValidationSchemas.bankDetailIdParam,
  }),

  ValidateRequest.validate({
    body: BankDetailValidationSchemas.updateBankDetail,
  }),

  asyncHandler(BankDetailController.update)
);

// DELETE
route.delete(
  "/:id",

  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    params: BankDetailValidationSchemas.bankDetailIdParam,
  }),

  asyncHandler(BankDetailController.delete)
);

export default route;
