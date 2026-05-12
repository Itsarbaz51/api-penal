// routes/audit-log.route.js

import { Router } from "express";

import AuditLogController from "../controller/audit-log.controller.js";

import AuditLogValidationSchemas from "../validation/audit-log.validation.js";

import ValidateRequest from "../middleware/validateRequest.middleware.js";

import AuthMiddleware from "../middleware/auth.middleware.js";

import asyncHandler from "../utils/AsyncHandler.js";

const route = Router();

// GET ALL
route.get(
  "/",

  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    query: AuditLogValidationSchemas.getAllAuditLogs,
  }),

  asyncHandler(AuditLogController.getAll)
);

export default route;
