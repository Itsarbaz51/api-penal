import ServiceService from "../service/service.service.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

class ServiceProviderController {
  // CREATE
  static create = async (req, res) => {
    const result = await ServiceService.create(req.body);

    return res.status(201).json(ApiResponse.success(result));
  };

  // UPDATE
  static update = async (req, res) => {
    const { id } = req.params;

    if (!id) throw ApiError.badRequest("ID is required");

    const result = await ServiceService.update(id, req.body);

    return res.json(
      ApiResponse.success(result, `Service updated successfully`)
    );
  };

  // GET ALL (Filter + Search + Pagination)
  static getAll = async (req, res) => {
    const { page, limit, search, isActive } = req.query;

    const pagination = {
      page: Number(page) || 1,
      limit: Number(limit) || 10,
    };

    const activeFilter =
      isActive !== undefined ? isActive === "true" : undefined;

    const result = await ServiceService.getAll({
      ...pagination,
      search,
      isActive: activeFilter,
    });

    return res.json(ApiResponse.success(result));
  };

  // DELETE
  static delete = async (req, res) => {
    const { id } = req.params;

    if (!id) throw ApiError.badRequest("ID is required");

    const result = await ServiceService.delete(id);

    return res.json(
      ApiResponse.success(result, `Service deleted successfully`)
    );
  };
}

export default ServiceProviderController;
