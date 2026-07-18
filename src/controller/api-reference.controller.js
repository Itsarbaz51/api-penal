import ApiReferenceService from "../service/api-reference.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";

class ApiReferenceController {
  // CREATE
  static create = async (req, res) => {
    const result = await ApiReferenceService.create(req.body);

    return res
      .status(201)
      .json(ApiResponse.success(result, "API reference created successfully"));
  };

  // UPDATE
  static update = async (req, res) => {
    const result = await ApiReferenceService.update(req.params.id, req.body);

    return res.json(
      ApiResponse.success(result, "API reference updated successfully")
    );
  };

  // ADMIN
  static getAll = async (req, res) => {
    const result = await ApiReferenceService.getAll(req.query);

    return res.json(ApiResponse.success(result));
  };

  // PUBLIC DOCS
  static getActive = async (req, res) => {
    const result = await ApiReferenceService.getActive(req.query);

    return res.json(ApiResponse.success(result));
  };

  // GET BY ID
  static getById = async (req, res) => {
    const result = await ApiReferenceService.getById(req.params.id);

    return res.json(ApiResponse.success(result));
  };

  // DELETE
  static delete = async (req, res) => {
    const result = await ApiReferenceService.delete(req.params.id);

    return res.json(
      ApiResponse.success(result, "API reference deleted successfully")
    );
  };
}

export default ApiReferenceController;
