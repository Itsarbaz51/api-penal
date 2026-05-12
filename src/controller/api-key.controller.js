import ApiKeyService from "../service/api-key.service.js";

import { ApiError } from "../utils/ApiError.js";

import { ApiResponse } from "../utils/ApiResponse.js";

class ApiKeyController {
  // CREATE
  static create = async (req, res) => {
    const result = await ApiKeyService.create(req.body);

    return res.status(201).json(ApiResponse.success(result));
  };

  // UPDATE
  static update = async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw ApiError.badRequest("ID is required");
    }

    const result = await ApiKeyService.update(id, req.body, req.user);

    return res.json(
      ApiResponse.success(result, "API key updated successfully")
    );
  };

  // GET ALL
  static getAll = async (req, res) => {
    const { page, limit, userId, isActive, search } = req.query;

    const result = await ApiKeyService.getAll({
      page: Number(page) || 1,

      limit: Number(limit) || 10,

      userId,

      isActive: isActive !== undefined ? isActive === "true" : undefined,

      search,
    });

    return res.json(ApiResponse.success(result));
  };

  // GET API KEY CREDENTIALS
  static getCredentials = async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
      throw ApiError.badRequest("ID is required");
    }

    const result = await ApiKeyService.getCredentials(userId);

    return res.json(
      ApiResponse.success(result, "API credentials fetched successfully")
    );
  };

  // DELETE
  static delete = async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw ApiError.badRequest("ID is required");
    }

    const result = await ApiKeyService.delete(id);

    return res.json(
      ApiResponse.success(result, "API key deleted successfully")
    );
  };
}

export default ApiKeyController;
