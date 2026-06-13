// controller/permission.controller.js

import PermissionService from "../service/permission.service.js";

import { ApiError } from "../utils/ApiError.js";

import { ApiResponse } from "../utils/ApiResponse.js";

class PermissionController {
  // CREATE
  static create = async (req, res) => {
    const result = await PermissionService.create(req.body);

    return res.status(201).json(ApiResponse.success(result));
  };

  // UPDATE
  static update = async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw ApiError.badRequest("ID is required");
    }

    const result = await PermissionService.update(id, req.body);

    return res.json(
      ApiResponse.success(result, "Permission updated successfully")
    );
  };

  // GET ALL
  static getAll = async (req, res) => {
    const { page, limit, scope, userId, packageId, serviceId } = req.query;

    const result = await PermissionService.getAll({
      page: Number(page) || 1,

      limit: Number(limit) || 10,

      scope,

      userId,

      packageId,

      serviceId,
    });

    return res.json(ApiResponse.success(result));
  };

  static myPermissions = async (req, res) => {
    const result = await PermissionService.myPermissions(req.user.id);

    return res.json(ApiResponse.success(result));
  };

  // DELETE
  static delete = async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw ApiError.badRequest("ID is required");
    }

    const result = await PermissionService.delete(id);

    return res.json(
      ApiResponse.success(result, "Permission deleted successfully")
    );
  };
}

export default PermissionController;
