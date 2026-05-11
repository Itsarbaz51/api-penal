import UserLimitService from "../service/user-limit.service.js";

import { ApiError } from "../utils/ApiError.js";

import { ApiResponse } from "../utils/ApiResponse.js";

class UserLimitController {
  // CREATE
  static create = async (req, res) => {
    const result = await UserLimitService.create(req.body);

    return res.status(201).json(ApiResponse.success(result));
  };

  // UPDATE
  static update = async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw ApiError.badRequest("ID is required");
    }

    const result = await UserLimitService.update(id, req.body);

    return res.json(
      ApiResponse.success(result, "User limit updated successfully")
    );
  };

  // GET ALL
  static getAll = async (req, res) => {
    const { page, limit, userId, packageId } = req.query;

    const result = await UserLimitService.getAll({
      page: Number(page) || 1,

      limit: Number(limit) || 10,

      userId,

      packageId,
    });

    return res.json(ApiResponse.success(result));
  };

  // DELETE
  static delete = async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw ApiError.badRequest("ID is required");
    }

    const result = await UserLimitService.delete(id);

    return res.json(
      ApiResponse.success(result, "User limit deleted successfully")
    );
  };
}

export default UserLimitController;
