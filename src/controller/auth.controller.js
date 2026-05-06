import AuthServices from "../service/auth.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
  cookieOptions,
  generateAccessToken,
  generateRefreshToken,
} from "../utils/jwt.js";

class AuthController {
  static async login(req, res) {
    const result = await AuthServices.login(req.body);

    const {
      password,
      transactionPin,
      refreshToken: _,
      ...userWithoutSensitiveData
    } = result;

    res
      .status(200)
      .cookie("accessToken", generateAccessToken, cookieOptions)
      .cookie("refreshToken", generateRefreshToken, cookieOptions)
      .json(ApiResponse.success(userWithoutSensitiveData, "Login successful"));
  }
}

export default AuthController;
