import BankDetailService from "../service/bank-detail.service.js";

import { ApiResponse } from "../utils/ApiResponse.js";

class BankDetailController {
  // CREATE
  static create = async (req, res) => {
    const result = await BankDetailService.create(req.body, req.file, req.user);

    return res.status(201).json(ApiResponse.success(result));
  };

  // UPDATE
  static update = async (req, res) => {
    const result = await BankDetailService.update(
      req.params.id,
      req.body,
      req.file
    );

    return res.json(
      ApiResponse.success(result, "Bank detail updated successfully")
    );
  };

  // GET ALL
  static getAll = async (req, res) => {
    const result = await BankDetailService.getAll(req.query);

    return res.json(ApiResponse.success(result));
  };

  // DELETE
  static delete = async (req, res) => {
    const result = await BankDetailService.delete(req.params.id);

    return res.json(
      ApiResponse.success(result, "Bank detail deleted successfully")
    );
  };
}

export default BankDetailController;
