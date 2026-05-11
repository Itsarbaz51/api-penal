import { Router } from "express";
import CommissionSettingController from "../controller/commission-setting.controller.js";
import CommissionSettingValidationSchemas from "../validation/commission-setting.validation.js";
import ValidateRequest from "../middleware/validateRequest.middleware.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import asyncHandler from "../utils/AsyncHandler.js";

const route = Router();

// CREATE
route.post(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    body: CommissionSettingValidationSchemas.createCommissionSetting,
  }),
  asyncHandler(CommissionSettingController.create)
);

// GET ALL
route.get(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    query: CommissionSettingValidationSchemas.getAllCommissionSettings,
  }),
  asyncHandler(CommissionSettingController.getAll)
);

// UPDATE
route.patch(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    params: CommissionSettingValidationSchemas.commissionSettingIdParam,
  }),
  ValidateRequest.validate({
    body: CommissionSettingValidationSchemas.updateCommissionSetting,
  }),
  asyncHandler(CommissionSettingController.update)
);

// DELETE
route.delete(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    params: CommissionSettingValidationSchemas.commissionSettingIdParam,
  }),
  asyncHandler(CommissionSettingController.delete)
);

export default route;
