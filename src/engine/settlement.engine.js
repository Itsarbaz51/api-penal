import WalletEngine from "./wallet.engine.js";
import CommissionEngine from "./commission.engine.js";
import SurchargeEngine from "./surcharge.engine.js";
import LedgerEntryService from "../service/ledger-entry.service.js";

export default class SettlementEngine {
  static async success(
    tx,
    { transaction, actor, pricing, mode, serviceProviderId }
  ) {
    const wallet = await WalletEngine.getWallet({
      tx,
      userId: actor.id,
      walletType: "PRIMARY",
    });

    await WalletEngine.captureHold(tx, wallet, pricing.totalDebit);

    await LedgerEntryService.create(tx, {
      walletId: wallet.id,
      transactionId: transaction.id,
      entryType: "DEBIT",
      referenceType: "TRANSACTION",
      amount: pricing.totalDebit,
      narration: "Transaction Debit",
      createdBy: actor.id,
    });

    if (mode === "COMMISSION") {
      await CommissionEngine.distribute(tx, {
        transactionId: transaction.id,
        userId: actor.id,
        pricing,
        serviceProviderId,
        createdBy: actor.id,
      });
    }

    if (mode === "SURCHARGE") {
      await SurchargeEngine.distribute(tx, {
        transactionId: transaction.id,
        userId: actor.id,
        pricing,
        createdBy: actor.id,
      });
    }
  }
}
