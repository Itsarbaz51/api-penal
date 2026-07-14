import FundRequestService from "../../service/fundRequest/fundRequest.service.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import asyncHandler from "../../utils/AsyncHandler.js";

class FundRequestController {
  static create = asyncHandler(async (req, res) => {
    const result = await FundRequestService.create(
      req.body,
      req.file,
      req.user,
      req.apiKey
    );

    if (!result) {
      throw ApiError.internal("Failed to Initialize");
    }

    res
      .status(201)
      .json(ApiResponse.success(result, "Initialize successfully", 201));
  });

  static verify = asyncHandler(async (req, res) => {
    const result = await FundRequestService.verify(req.body, req.user);

    if (!result) {
      throw ApiError.internal("Failed to verify");
    }

    res
      .status(201)
      .json(ApiResponse.success(result, "Verify successfully", 201));
  });

  static checkStatus = asyncHandler(async (req, res) => {
    const result = await FundRequestService.checkStatus(
      req.body,
      req.user,
      req.apiKey
    );

    if (!result) {
      throw ApiError.internal("Failed to Check Status");
    }

    res
      .status(201)
      .json(ApiResponse.success(result, "Check Status successfully", 201));
  });
}

export default FundRequestController;
