import ApiLanguageService from "../service/api-language.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";

class ApiLanguageController {
  // CREATE
  static create = async (req, res) => {
    const result =
      await ApiLanguageService.create(
        req.body
      );

    return res.status(201).json(
      ApiResponse.success(
        result,
        "Language created successfully"
      )
    );
  };

  // UPDATE
  static update = async (req, res) => {
    const result =
      await ApiLanguageService.update(
        req.params.id,
        req.body
      );

    return res.json(
      ApiResponse.success(
        result,
        "Language updated successfully"
      )
    );
  };

  // GET ALL
  static getAll = async (req, res) => {
    const result =
      await ApiLanguageService.getAll(
        req.query
      );

    return res.json(
      ApiResponse.success(result)
    );
  };

  // GET BY ID
  static getById = async (req, res) => {
    const result =
      await ApiLanguageService.getById(
        req.params.id
      );

    return res.json(
      ApiResponse.success(result)
    );
  };

  // DELETE
  static delete = async (req, res) => {
    const result =
      await ApiLanguageService.delete(
        req.params.id
      );

    return res.json(
      ApiResponse.success(
        result,
        "Language deleted successfully"
      )
    );
  };
}

export default ApiLanguageController;