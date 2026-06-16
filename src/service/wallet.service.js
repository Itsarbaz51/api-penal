import prisma from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";

class WalletService {
  // CREATE MULTIPLE WALLETS
  static async create(payload) {
    const { userId, wallets } = payload;

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw ApiError.badRequest("User not found");
    }

    // DUPLICATE TYPES IN REQUEST
    const walletTypes = wallets.map((wallet) => wallet.walletType);

    if (new Set(walletTypes).size !== walletTypes.length) {
      throw ApiError.badRequest("Duplicate wallet types in request");
    }

    // EXISTING WALLETS CHECK
    const existingWallets = await prisma.wallet.findMany({
      where: {
        userId,

        walletType: {
          in: walletTypes,
        },
      },
    });

    if (existingWallets.length > 0) {
      throw ApiError.conflict(
        `${existingWallets
          .map((wallet) => wallet.walletType)
          .join(", ")} wallet already exists`
      );
    }

    return prisma.$transaction(
      wallets.map((wallet) =>
        prisma.wallet.create({
          data: {
            userId,

            walletType: wallet.walletType,

            balance: wallet.balance || 0,

            holdBalance: wallet.holdBalance || 0,
          },
        })
      )
    );
  }
}

export default WalletService;
