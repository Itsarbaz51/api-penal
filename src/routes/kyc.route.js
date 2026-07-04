import { Router } from "express";
import KycController from "../controller/kyc.controller.js";
import KycValidationSchemas from "../validation/kyc.validation.js";
import ValidateRequest from "../middleware/validateRequest.middleware.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import asyncHandler from "../utils/AsyncHandler.js";
import upload from "../middleware/multer.middleware.js";

const route = Router();

route.post(
  "/",
  AuthMiddleware.isAuthenticated,
  upload.fields([
    {
      name: "documents",
      maxCount: 20,
    },
  ]),
  ValidateRequest.validate({
    body: KycValidationSchemas.createKyc,
  }),
  asyncHandler(KycController.create)
);

route.get(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    query: KycValidationSchemas.getAllKyc,
  }),
  asyncHandler(KycController.getAll)
);

route.patch(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    params: KycValidationSchemas.kycIdParam,
  }),
  ValidateRequest.validate({
    body: KycValidationSchemas.updateKyc,
  }),
  asyncHandler(KycController.update)
);

route.get(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    params: KycValidationSchemas.kycIdParam,
  }),
  asyncHandler(KycController.getById)
);

route.delete(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({
    params: KycValidationSchemas.kycIdParam,
  }),
  asyncHandler(KycController.delete)
);

export default route;
