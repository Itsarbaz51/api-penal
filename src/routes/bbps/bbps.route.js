import { Router } from "express";
import ValidateRequest from "../middleware/validateRequest.middleware.js";
import BbpsController from "../controller/bbps.controller.js";
import asyncHandler from "../utils/AsyncHandler.js";
import BbpsValidation from "../../validation/bbps/bbps.validation.js";

const route = Router();

route.post(
  "/execute",
  ValidateRequest.validate(BbpsValidation.execute),
  asyncHandler(BbpsController.execute)
);

export default route;
