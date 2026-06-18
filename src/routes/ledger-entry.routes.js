import { Router } from "express";
import asyncHandler from "../utils/AsyncHandler.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import ValidateRequest from "../middleware/validateRequest.middleware.js";

import LedgerEntryController from "../controller/ledger-entry.controller.js";

import LedgerEntryValidationSchemas from "../validation/ledger-entry.validation.js";

const route = Router();

// CREATE
route.post(
  "/",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    body: LedgerEntryValidationSchemas.createLedgerEntry,
  }),

  asyncHandler(LedgerEntryController.create)
);

// GET ALL
route.get(
  "/",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    query: LedgerEntryValidationSchemas.getAllLedgerEntries,
  }),

  asyncHandler(LedgerEntryController.getAll)
);

// GET BY ID
route.get(
  "/:id",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    params: LedgerEntryValidationSchemas.ledgerEntryIdParam,
  }),

  asyncHandler(LedgerEntryController.getById)
);

export default route;
