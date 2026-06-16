import { Router } from "express";

import ApiLanguageController from "../controller/api-language.controller.js";

import ApiLanguageValidationSchemas from "../validation/api-language.validation.js";

import ValidateRequest from "../middleware/validateRequest.middleware.js";

import AuthMiddleware from "../middleware/auth.middleware.js";

import asyncHandler from "../utils/AsyncHandler.js";

const route = Router();

// CREATE
route.post(
  "/",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    body:
      ApiLanguageValidationSchemas.createApiLanguage,
  }),

  asyncHandler(
    ApiLanguageController.create
  )
);

// GET ALL
route.get(
  "/",
  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    query:
      ApiLanguageValidationSchemas.getAllApiLanguages,
  }),

  asyncHandler(
    ApiLanguageController.getAll
  )
);

// GET BY ID
route.get(
  "/:id",

  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    params:
      ApiLanguageValidationSchemas.apiLanguageIdParam,
  }),

  asyncHandler(
    ApiLanguageController.getById
  )
);

// UPDATE
route.patch(
  "/:id",

  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    params:
      ApiLanguageValidationSchemas.apiLanguageIdParam,
  }),

  ValidateRequest.validate({
    body:
      ApiLanguageValidationSchemas.updateApiLanguage,
  }),

  asyncHandler(
    ApiLanguageController.update
  )
);

// DELETE
route.delete(
  "/:id",

  AuthMiddleware.isAuthenticated,

  ValidateRequest.validate({
    params:
      ApiLanguageValidationSchemas.apiLanguageIdParam,
  }),

  asyncHandler(
    ApiLanguageController.delete
  )
);

export default route;