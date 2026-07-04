import KycService from "../service/kyc.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";

class KycController {
  static create = async (req, res) => {
    const result = await KycService.create(req.body, req.user, req.files);

    return res.status(201).json(ApiResponse.success(result));
  };

  static update = async (req, res) => {
    const result = await KycService.update(req.params.id, req.body, req.user);

    return res.json(ApiResponse.success(result, "KYC updated successfully"));
  };

  static getAll = async (req, res) => {
    const result = await KycService.getAll(req.query);

    return res.json(ApiResponse.success(result));
  };

  static async getById(req, res, next) {
    const data = await KycService.getById(req.params.id);

    return res.json(ApiResponse.success(data, "KYC retrieved successfully"));
  }

  static delete = async (req, res) => {
    const result = await KycService.delete(req.params.id);

    return res.json(ApiResponse.success(result, "KYC deleted successfully"));
  };
}

export default KycController;
