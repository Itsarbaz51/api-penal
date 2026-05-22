import PackageService from "../service/package.service.js";

import { ApiResponse } from "../utils/ApiResponse.js";

class PackageController {
  static async create(req, res) {
    const packageData = await PackageService.createPackage(req.body);

    return res.json(
      ApiResponse.success(packageData, "Package created successfully")
    );
  }

  static async getAll(req, res) {
    const packages = await PackageService.getPackages(req.query);

    return res.json(
      ApiResponse.success(packages, "Packages fetched successfully")
    );
  }

  static async update(req, res) {
    const packageData = await PackageService.updatePackage(
      req.params.id,
      req.body
    );

    return res.json(
      ApiResponse.success(packageData, "Package updated successfully")
    );
  }

  static async delete(req, res) {
    await PackageService.deletePackage(req.params.id);

    return res.json(ApiResponse.success(null, "Package deleted successfully"));
  }
}

export default PackageController;
