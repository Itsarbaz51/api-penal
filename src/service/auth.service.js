import { ApiError } from "../utils/ApiError.js";
import prisma from "../db/db.js";
import CryptoService from "../utils/crypto.utils.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";
import { envConfig } from "../config/env.config.js";
import { emailQueue } from "../queues/email.queue.js";
import crypto from "node:crypto";

class AuthServices {
  static async login(payload, req) {
    const { identify, password, latitude, longitude, accuracy } = payload;

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identify },
          { registrationNumber: identify },
          { phoneNumber: identify },
        ],
      },
    });

    if (!user) {
      throw ApiError.unauthorized("Invalid credentials");
    }

    const isValid = CryptoService.decrypt(user.password);

    if (isValid !== password) {
      throw ApiError.unauthorized("Invalid credentials");
    }

    const tokenPayload = {
      id: user?.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    const ipAddress =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress ||
      null;
    const domainName = req.hostname || null;
    const userAgent = req.headers["user-agent"] || null;
    let location = null;

    if (latitude && longitude) {
      location = `${latitude},${longitude}`;
    }

    await prisma.$transaction([
      prisma.user.update({
        where: {
          id: user.id,
        },

        data: {
          refreshToken,
          lastLoginAt: new Date(),
        },
      }),

      prisma.loginEvent.create({
        data: {
          userId: user.id,
          roleType: user.role,
          message: "User login successful",
          domainName,
          ipAddress,
          latitude,
          longitude,
          accuracy,
          location,
          userAgent,
        },
      }),
    ]);

    await prisma.user.update({
      where: { id: user?.id },
      data: {
        refreshToken,
        lastLoginAt: new Date(),
      },
    });

    return { user, accessToken, refreshToken };
  }

  static async me(userId) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        wallets: {
          select: {
            walletType: true,
            balance: true,
            holdBalance: true,
          },
        },
      },
    });

    if (!user) {
      throw ApiError.notFound("User not found");
    }

    const {
      password,
      transactionPin,
      refreshToken,
      passwordForgotToken,
      passwordForgotExpires,
      ...safeUser
    } = user;

    return safeUser;
  }

  static async forgotPassword(email) {
    const user = await prisma.user.findFirst({
      where: {
        email: email.trim().toLowerCase(),
      },
    });

    if (!user) {
      throw ApiError.notFound("User not found");
    }

    if (
      user.lastPasswordForgot &&
      Date.now() - new Date(user.lastPasswordForgot).getTime() < 60 * 1000
    ) {
      throw ApiError.badRequest("Please wait before requesting again");
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordForgotToken: hashedToken,
        passwordForgotExpires: new Date(Date.now() + 15 * 60 * 1000),
        lastPasswordForgot: new Date(),
      },
    });

    const forgotUrl = `${envConfig.API_BASE_URL}/forgot-password-verify?token=${resetToken}`;

    await emailQueue.add(
      "forgot-password",
      {
        email: user.email,
        name: user.fullName,
        forgotUrl,
      },
      {
        attempts: 3,
        backoff: {
          type: "exponential",
          delay: 5000,
        },
        removeOnComplete: true,
      }
    );
  }

  static async forgotPasswordVerify(payload) {
    const { token, password } = payload;

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await prisma.user.findFirst({
      where: {
        passwordForgotToken: hashedToken,

        passwordForgotExpires: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      throw ApiError.badRequest("Invalid or expired token");
    }

    const encryptPassword = await CryptoService.encrypt(password);

    await prisma.user.update({
      where: {
        id: user.id,
      },

      data: {
        password: encryptPassword,

        passwordForgotToken: null,

        passwordForgotExpires: null,

        lastPasswordChange: new Date(),
      },
    });

    return true;
  }

  static async resetPassword(userId, payload) {
    const { oldPassword, newPassword } = payload;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw ApiError.notFound("User not found");
    }

    const isValid = await CryptoService.decrypt(user.password);

    if (isValid !== oldPassword) {
      throw ApiError.unauthorized("Old password incorrect");
    }

    const samePassword = await CryptoService.decrypt(user.password);

    if (newPassword == samePassword) {
      throw ApiError.badRequest("New password cannot be same as old password");
    }

    const encryptPassword = await CryptoService.encrypt(newPassword);

    await prisma.user.update({
      where: {
        id: user.id,
      },

      data: {
        password: encryptPassword,

        lastPasswordChange: new Date(),
      },
    });

    return true;
  }

  static async resetPin(userId, payload) {
    const { oldPin, newPin } = payload;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw ApiError.notFound("User not found");
    }

    if (!user.transactionPin) {
      throw ApiError.badRequest("PIN not set");
    }

    const isValid = await CryptoService.decrypt(user.transactionPin);

    if (isValid !== oldPin) {
      throw ApiError.badRequest("Old pin incorrect");
    }

    const samePin = await CryptoService.decrypt(user.transactionPin);

    if (samePin === newPin) {
      throw ApiError.badRequest("New pin cannot be same as old pin");
    }

    const hashedPin = await CryptoService.encrypt(newPin);

    await prisma.user.update({
      where: {
        id: user.id,
      },

      data: {
        transactionPin: hashedPin,
      },
    });

    return true;
  }

  static async logout(userId) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw ApiError.notFound("User not found");
    }

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshToken: null,
      },
    });

    return true;
  }
}

export default AuthServices;
