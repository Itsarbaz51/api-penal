import BbpsService from "../../service/bbps/bbps.service.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

class BbpsController {
  // CATEGORIES
  static categories = async (req, res) => {
    const result = await BbpsService.categories(req.body, req.user, req.apiKey);

    return res.json(ApiResponse.success(result));
  };

  // BILLERS
  static billers = async (req, res) => {
    const result = await BbpsService.billers(req.body, req.user, req.apiKey);

    return res.json(ApiResponse.success(result));
  };

  static billerDetails = async (req, res) => {
    const result = await BbpsService.billerDetails(
      req.body,
      req.user,
      req.apiKey
    );

    return res.json(ApiResponse.success(result));
  };
}

export default BbpsController;
