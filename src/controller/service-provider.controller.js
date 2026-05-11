import ServiceProviderService from "../service/service-provider.service.js";

import { ApiError } from "../utils/ApiError.js";

import { ApiResponse } from "../utils/ApiResponse.js";

class ServiceProviderController {
  // CREATE
  static create = async (req, res) => {
    const result = await ServiceProviderService.create(req.body);

    return res.status(201).json(ApiResponse.success(result));
  };

  // UPDATE
  static update = async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw ApiError.badRequest("ID is required");
    }

    const result = await ServiceProviderService.update(id, req.body);

    return res.json(
      ApiResponse.success(result, "Service provider updated successfully")
    );
  };

  // GET ALL
  static getAll = async (req, res) => {
    const { page, limit, search, serviceId, providerId, isActive } = req.query;

    const result = await ServiceProviderService.getAll({
      page: Number(page) || 1,
      limit: Number(limit) || 10,
      search,
      serviceId,
      providerId,
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

    const result = await ServiceProviderService.delete(id);

    return res.json(
      ApiResponse.success(result, "Service provider deleted successfully")
    );
  };
}

export default ServiceProviderController;
