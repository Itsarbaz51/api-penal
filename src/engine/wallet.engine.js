import { ApiError } from "../utils/ApiError.js";

export default class WalletEngine {
  // GET WALLET
  static async getWallet({ tx, userId, walletType = "PRIMARY" }) {
    const wallet = await tx.wallet.findUnique({
      where: {
        userId_walletType: {
          userId,
          walletType,
        },
      },
    });

    if (!wallet) {
      throw ApiError.notFound("Wallet not found");
    }

    return wallet;
  }

  // DEBIT
  static async debit(tx, wallet, amount) {
    const amt = Number(amount);

    const available = Number(wallet.balance) - Number(wallet.holdBalance);

    if (available < amt) {
      throw ApiError.badRequest("Insufficient balance");
    }

    return tx.wallet.update({
      where: {
        id: wallet.id,
      },

      data: {
        balance: {
          decrement: amt,
        },
      },
    });
  }

  // CREDIT
  static async credit(tx, wallet, amount) {
    const amt = Number(amount);

    return tx.wallet.update({
      where: {
        id: wallet.id,
      },

      data: {
        balance: {
          increment: amt,
        },
      },
    });
  }

  // HOLD
  static async hold(tx, wallet, amount) {
    const amt = Number(amount);

    const available = Number(wallet.balance) - Number(wallet.holdBalance);

    if (available < amt) {
      throw ApiError.badRequest("Insufficient balance to hold");
    }

    return tx.wallet.update({
      where: {
        id: wallet.id,
      },

      data: {
        holdBalance: {
          increment: amt,
        },
      },
    });
  }

  // RELEASE HOLD
  static async releaseHold(tx, wallet, amount) {
    const amt = Number(amount);

    if (Number(wallet.holdBalance) < amt) {
      throw ApiError.badRequest("Invalid hold release");
    }

    return tx.wallet.update({
      where: {
        id: wallet.id,
      },

      data: {
        holdBalance: {
          decrement: amt,
        },
      },
    });
  }

  // CAPTURE HOLD
  static async captureHold(tx, wallet, amount) {
    const amt = Number(amount);

    if (Number(wallet.holdBalance) < amt) {
      throw ApiError.badRequest("Invalid hold capture");
    }

    return tx.wallet.update({
      where: {
        id: wallet.id,
      },

      data: {
        holdBalance: {
          decrement: amt,
        },

        balance: {
          decrement: amt,
        },
      },
    });
  }

  // transfer
  static async transfer({ tx, fromWallet, toWallet, amount }) {
    await this.debit(tx, fromWallet, amount);

    await this.credit(tx, toWallet, amount);
  }
}
    