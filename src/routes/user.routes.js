import { Router } from "express";
import UserController from "../controller/user.controller.js";
import UserValidationSchemas from "../validation/user.validation.js";
import ValidateRequest from "../middleware/validateRequest.middleware.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import asyncHandler from "../utils/AsyncHandler.js";
import upload from "../middleware/multer.middleware.js";

const route = Router();

route.post(
  "/",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({ body: UserValidationSchemas.createUser }),
  asyncHandler(UserController.create)
);

route.get(
  "/",
  AuthMiddleware.isAuthenticated,
  asyncHandler(UserController.getAll)
);

route.get(
  "/:id/credentials",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({ params: UserValidationSchemas.userIdParam }),
  asyncHandler(UserController.credentials)
);

route.get(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({ params: UserValidationSchemas.userIdParam }),
  asyncHandler(UserController.getOne)
);

route.patch(
  "/:id",
  AuthMiddleware.isAuthenticated,
  upload.single("profileImage"),
  ValidateRequest.validate({ params: UserValidationSchemas.userIdParam }),
  ValidateRequest.validate({ body: UserValidationSchemas.updateUser }),
  asyncHandler(UserController.update)
);

route.delete(
  "/:id",
  AuthMiddleware.isAuthenticated,
  ValidateRequest.validate({ params: UserValidationSchemas.userIdParam }),
  asyncHandler(UserController.delete)
);

export default route;
