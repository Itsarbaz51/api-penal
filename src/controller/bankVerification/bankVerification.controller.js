import asyncHandler from "../../utils/AsyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import BankVerificationService from "../../service/bankVerification/bankVerification.service.js";

class BankVerificationController {
  static pennyDrop = asyncHandler(async (req, res) => {
    const result = await BankVerificationService.pennyDrop(
      req.body,
      req.user,
      req.apiKey
    );

    if (!result) {
      throw ApiError.internal("Penny Drop verification failed");
    }

    return res
      .status(200)
      .json(
        ApiResponse.success(
          result,
          "Bank account verified successfully using Penny Drop",
          200
        )
      );
  });

  static pennyLess = asyncHandler(async (req, res) => {
    const result = await BankVerificationService.pennyLess(
      req.body,
      req.user,
      req.apiKey
    );

    if (!result) {
      throw ApiError.internal("Penny Less verification failed");
    }

    return res
      .status(200)
      .json(
        ApiResponse.success(
          result,
          "Bank account verified successfully using Penny Less",
          200
        )
      );
  });
}

export { BankVerificationController };
