import AuthServices from "../service/auth.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { cookieOptions } from "../utils/jwt.js";

class AuthController {
  static async login(req, res) {
    const result = await AuthServices.login(req.body);

    const { user, accessToken, refreshToken } = result;

    const {
      password,
      transactionPin,
      refreshToken: _,
      passwordForgotToken,
      passwordForgotExpires,
      ...safeUser
    } = user;

    return res
      .status(200)
      .cookie("accessToken", accessToken, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .cookie("refreshToken", refreshToken, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json(
        ApiResponse.success(
          {
            user: safeUser,
            accessToken,
          },
          "Login successful"
        )
      );
  }

  static async forgotPassword(req, res) {
    await AuthServices.forgotPassword(req.body.email);

    return res.json(ApiResponse.success(null, "Reset email sent"));
  }

  static async resetPasswordToken(req, res) {
    await AuthServices.resetPasswordToken(req.body);

    return res.json(ApiResponse.success(null, "Password reset successful"));
  }

  static async resetPassword(req, res) {
    await AuthServices.resetPassword(req.user.id, req.body);

    return res.json(ApiResponse.success(null, "Password reset successful"));
  }

  static async resetPin(req, res) {
    await AuthServices.resetPin(req.user.id, req.body);

    return res.json(ApiResponse.success(null, "PIN reset successful"));
  }

  static async me(req, res) {
    const user = await AuthServices.me(req.user.id);

    return res.json(ApiResponse.success(user, "Current user fetched"));
  }
}

export default AuthController;
