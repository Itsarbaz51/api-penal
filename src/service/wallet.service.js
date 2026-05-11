import prisma from "../db/db.js";

import { ApiError } from "../utils/ApiError.js";

class WalletService {
  // CREATE SINGLE WALLET
  static async create(payload) {
    const { userId, walletType, balance = 0, holdBalance = 0 } = payload;

    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      throw ApiError.badRequest("User not found");
    }

    const walletExists = await prisma.wallet.findUnique({
      where: {
        userId_walletType: {
          userId,
          walletType,
        },
      },
    });

    if (walletExists) {
      throw ApiError.conflict(`${walletType} wallet already exists`);
    }

    return prisma.wallet.create({
      data: {
        userId,
        walletType,
        balance: balance || 0,
        holdBalance: holdBalance || 0,
      },
    });
  }
}

export default WalletService;
