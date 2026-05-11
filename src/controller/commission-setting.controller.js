import CommissionSettingService from "../service/commission-setting.service.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

class CommissionSettingController {
  // CREATE
  static create = async (req, res) => {
    const result = await CommissionSettingService.create(req.body, req.user);
    return res.status(201).json(ApiResponse.success(result));
  };

  // UPDATE
  static update = async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw ApiError.badRequest("ID is required");
    }

    const result = await CommissionSettingService.update(id, req.body);

    return res.json(
      ApiResponse.success(result, "Commission setting updated successfully")
    );
  };

  // GET ALL
  static getAll = async (req, res) => {
    const { page, limit, search, targetUserId, serviceProviderId, isActive } =
      req.query;

    const result = await CommissionSettingService.getAll({
      page: Number(page) || 1,

      limit: Number(limit) || 10,

      search,

      targetUserId,

      serviceProviderId,

      isActive: isActive !== undefined ? isActive === "true" : undefined,
    });

    return res.json(ApiResponse.success(result));
  };

  // DELETE
  static delete = async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw ApiError.badRequest("ID is required");
    }

    const result = await CommissionSettingService.delete(id);

    return res.json(
      ApiResponse.success(result, "Commission setting deleted successfully")
    );
  };
}

export default CommissionSettingController;
