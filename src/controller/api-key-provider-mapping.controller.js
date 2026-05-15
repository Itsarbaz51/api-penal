import ApiKeyProviderMappingService from "../service/api-key-provider-mapping.service.js";

import { ApiResponse } from "../utils/ApiResponse.js";

class ApiKeyProviderMappingController {
  // CREATE
  static create = async (req, res) => {
    const result = await ApiKeyProviderMappingService.create(req.body);

    return res.status(201).json(ApiResponse.success(result));
  };

  // UPDATE
  static update = async (req, res) => {
    const result = await ApiKeyProviderMappingService.update(
      req.params.id,
      req.body
    );

    return res.json(
      ApiResponse.success(result, "Mapping updated successfully")
    );
  };

  // GET ALL
  static getAll = async (req, res) => {
    const result = await ApiKeyProviderMappingService.getAll(req.query);

    return res.json(ApiResponse.success(result));
  };

  // DELETE
  static delete = async (req, res) => {
    const result = await ApiKeyProviderMappingService.delete(req.params.id);

    return res.json(
      ApiResponse.success(result, "Mapping deleted successfully")
    );
  };
}

export default ApiKeyProviderMappingController;
