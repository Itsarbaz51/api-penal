import WalletEngine from "./wallet.engine.js";
import LedgerEngine from "./ledger.engine.js";

export default class CommissionEngine {
  static async distribute(
    tx,
    { transactionId, userId, serviceProviderId, pricing, createdBy }
  ) {
    const admin = await tx.user.findFirst({
      where: {
        role: "SUPER_ADMIN",
      },
    });

    const user = await tx.user.findUnique({
      where: {
        id: userId,
      },

      select: {
        packageId: true,
      },
    });

    let rule = await tx.commissionSetting.findFirst({
      where: {
        targetUserId: userId,
        serviceProviderId,
        mode: "COMMISSION",
        isActive: true,
      },
    });

    if (!rule && user.packageId) {
      rule = await tx.commissionSetting.findFirst({
        where: {
          packageId: user.packageId,
          serviceProviderId,
          mode: "COMMISSION",
          isActive: true,
        },
      });
    }

    let userCommission = 0;

    if (rule) {
      if (rule.type === "PERCENTAGE") {
        userCommission = (pricing.txnAmount * rule.value) / 100;
      } else {
        userCommission = rule.value;
      }
    }

    if (userCommission > pricing.providerCost) {
      userCommission = pricing.providerCost;
    }

    const adminCommission = pricing.providerCost - userCommission;

    // USER

    if (userCommission > 0) {
      const wallet = await WalletEngine.getWallet({
        tx,
        userId,
        walletType: "COMMISSION",
      });

      await WalletEngine.credit(tx, wallet, userCommission);

      await LedgerEngine.create(tx, {
        walletId: wallet.id,
        transactionId,
        entryType: "CREDIT",
        referenceType: "COMMISSION",
        amount: userCommission,
        narration: "Commission earned",
        createdBy,
      });
    }

    // ADMIN

    if (adminCommission > 0) {
      const wallet = await WalletEngine.getWallet({
        tx,
        userId: admin.id,
        walletType: "COMMISSION",
      });

      await WalletEngine.credit(tx, wallet, adminCommission);

      await LedgerEngine.create(tx, {
        walletId: wallet.id,
        transactionId,
        entryType: "CREDIT",
        referenceType: "COMMISSION",
        amount: adminCommission,
        narration: "Admin commission",
        createdBy,
      });
    }
  }
}
