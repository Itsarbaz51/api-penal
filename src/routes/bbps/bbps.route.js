import { Router } from "express";
import BbpsController from "../../controller/bbps/bbps.controller.js";
// import AuthMiddleware from "../../middleware/auth.middleware.js";
import ApiKeyMiddleware from "../../middleware/apiKey.middleware.js";
import asyncHandler from "../../utils/AsyncHandler.js";
import ValidateRequest from "../../middleware/validateRequest.middleware.js";
import BbpsValidation from "../../validation/bbps/bbps.validation.js";

const route = Router();

// BILLER LIST
route.get(
  "/categorys",
  ApiKeyMiddleware.verify,
  asyncHandler(BbpsController.categories)
);

route.post(
  "/billers",
  ApiKeyMiddleware.verify,
  // ValidateRequest.validate({
  //   body: BbpsValidation.billers,
  // }),
  asyncHandler(BbpsController.billers)
);

route.post(
  "/biller-details",
  ApiKeyMiddleware.verify,
  ValidateRequest.validate({
    body: BbpsValidation.billerDetails,
  }),
  asyncHandler(BbpsController.billerDetails)
);

route.post(
  "/bill-fetch",
  ApiKeyMiddleware.verify,
  ValidateRequest.validate({
    body: BbpsValidation.billFetch,
  }),
  asyncHandler(BbpsController.billFetch)
);

route.post(
  "/bill-pay",
  ApiKeyMiddleware.verify,
  ValidateRequest.validate({
    body: BbpsValidation.billPay,
  }),
  asyncHandler(BbpsController.billPay)
);

export default route;
