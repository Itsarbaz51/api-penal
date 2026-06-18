import WalletEngine from "./wallet.engine.js";
import LedgerEngine from "./ledger.engine.js";

export default class SurchargeEngine {
  static async distribute(tx, { transactionId, userId, pricing, createdBy }) {
    const admin = await tx.user.findFirst({
      where: {
        role: "SUPER_ADMIN",
      },
    });

    const wallet = await WalletEngine.getWallet({
      tx,
      userId: admin.id,
      walletType: "COMMISSION",
    });

    await WalletEngine.credit(tx, wallet, pricing.surcharge);

    await LedgerEngine.create(tx, {
      walletId: wallet.id,
      transactionId,
      entryType: "CREDIT",
      referenceType: "SURCHARGE",
      amount: pricing.surcharge,
      narration: "Surcharge earning",
      createdBy,
    });

    if (pricing.gstAmount > 0) {
      const gstWallet = await WalletEngine.getWallet({
        tx,
        userId: admin.id,
        walletType: "GST",
      });

      await WalletEngine.credit(tx, gstWallet, pricing.gstAmount);
    }
  }
}
