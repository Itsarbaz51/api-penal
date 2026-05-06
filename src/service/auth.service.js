import { ApiError } from "../utils/ApiError.js";
import prisma from "../db/db.js";
import CryptoService from "../utils/crypto.utils.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";

class AuthServices {
  static async login(payload) {
    const { identify, password, latitude, longitude, accuracy } = payload;

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identify },
          { username: identify },
          { phoneNumber: identify },
        ],
      },
      include: {
        role: {
          select: {
            id: true,
            type: true,
          },
        },
      },
    });

    if (!user) {
      return ApiError.unauthorized("Invalid credentials");
    }

    const isValid = CryptoService.decrypt(user.password);

    if (isValid !== password) {
      return ApiError.unauthorized("Invalid credentials");
    }

    const tokenPayload = {
      id: user?.id,
      email: user.email,
      role: user.role.type,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    await prisma.user.update({
      where: { id: user?.id },
      data: { refreshToken },
    });

    return { user, accessToken, refreshToken };
  }
}

export default AuthServices;
