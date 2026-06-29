import WalletEngine from "./wallet.engine.js";
import { ApiError } from "../utils/ApiError.js";
import CommissionEarningService from "../service/commission-earning.service.js";
import LedgerEntryService from "../service/ledger-entry.service.js";

export default class SurchargeEngine {
  static async distribute(
    tx,
    {
      transactionId,
      userId,
      pricing,
      createdBy,
      serviceProviderId,
      category,
      operator,
      paymentMethod,
      cardNetwork,
      config,
    }
  ) {
    const totalSurcharge = pricing.surcharge || 0;
    if (totalSurcharge <= 0) return;

    const txnAmount = pricing.txnAmount || 0;

    const serviceProvider = await tx.serviceProvider.findUnique({
      where: { id: serviceProviderId },
    });

    if (!serviceProvider) throw ApiError.notFound("Service provider not found");

    let currentUser = await tx.user.findUnique({
      where: { id: userId },
      select: { id: true, parentId: true, packageId: true },
    });

    if (!currentUser) throw ApiError.notFound("User not found");

    const admin = await tx.user.findFirst({
      where: { parentId: null },
      select: { id: true },
    });

    // USER DEBIT (IMPORTANT - missing tha)
    const userWallet = await WalletEngine.getWallet({
      tx,
      userId,
      walletType: "PRIMARY",
    });

    await LedgerEntryService.create(tx, {
      walletId: userWallet.id,
      transactionId,
      entryType: "DEBIT",
      referenceType: "SURCHARGE",
      amount: totalSurcharge,
      narration: "Surcharge charged",
      serviceProviderId,
      createdBy,
    });

    // GET USER AMOUNT (PAYMENT + SLAB SUPPORT)
    const getAmount = async (user) => {
      const rule =
        (await tx.commissionSetting.findFirst({
          where: {
            serviceProviderId,
            mode: "SURCHARGE",
            isActive: true,
            targetUserId: user.id,
          },
        })) ||
        (await tx.commissionSetting.findFirst({
          where: {
            serviceProviderId,
            mode: "SURCHARGE",
            isActive: true,
            packageId: user.packageId,
          },
        }));

      if (!rule) return 0;

      let value = rule.value || 0;
      let type = rule.type;

      // PAYMENT METHOD
      if (rule.supportPaymentMethod) {
        const payment = await tx.commissionSetting.findFirst({
          where: {
            paymentMethod,
            category,
            operator,
            OR: [{ network: cardNetwork }, { network: null }],
          },
        });

        if (payment) {
          value = payment.value || 0;
          type = payment.type || type;
        }
      }

      // SLAB
      if (rule.supportsSlab && !rule.supportPaymentMethod) {
        const slab = await tx.commissionSetting.findFirst({
          where: {
            minAmount: { lte: txnAmount },
            maxAmount: { gte: txnAmount },
          },
        });

        if (slab) {
          value = slab.value;
          type = slab.type || type;
        }
      }

      return type === "PERCENTAGE" ? (txnAmount * value) / 100 : value;
    };

    // DISTRIBUTION (DIFFERENCE LOGIC)
    let previousAmount = await getAmount(currentUser);

    const earningsMap = new Map();

    while (currentUser?.parentId) {
      const parent = await tx.user.findUnique({
        where: { id: currentUser.parentId },
        select: { id: true, parentId: true, packageId: true },
      });

      if (!parent) break;

      const parentAmount = await getAmount(parent);

      let diff = previousAmount - parentAmount;
      if (diff < 0) diff = 0;

      if (diff > 0) {
        earningsMap.set(parent.id, (earningsMap.get(parent.id) || 0) + diff);
      }

      previousAmount = parentAmount;
      currentUser = parent;
    }

    // ADMIN REMAINING
    const distributed = [...earningsMap.values()].reduce((a, b) => a + b, 0);

    const adminProfit = totalSurcharge - distributed;

    if (adminProfit > 0) {
      earningsMap.set(admin.id, (earningsMap.get(admin.id) || 0) + adminProfit);
    }

    // CREDIT ALL
    for (const [uid, amount] of earningsMap.entries()) {
      if (amount <= 0) continue;

      const wallet = await WalletEngine.getWallet({
        tx,
        userId: uid,
        walletType: "COMMISSION",
      });

      await WalletEngine.credit(tx, wallet, amount);
      await CommissionEarningService.create(tx, {
        transactionId,
        userId: uid,
        fromUserId: userId,
        serviceProviderId,
        amount: pricing.txnAmount,
        mode: "SURCHARGE",
        type: config?.type || "FLAT",
        netAmount: amount,

        metadata: {
          surcharge: pricing.surcharge,
        },

        createdBy,
      });

      await LedgerEntryService.create(tx, {
        walletId: wallet.id,
        transactionId,
        entryType: "CREDIT",
        referenceType: "SURCHARGE",
        amount,
        narration: "Surcharge earning",
        serviceProviderId,
        createdBy,
      });
    }

    // ================= PROVIDER COST =================

    const providerCost = pricing.providerCost || 0;

    if (providerCost > 0) {
      // USER DEBIT
      await LedgerEntryService.create(tx, {
        walletId: userWallet.id,
        transactionId,
        entryType: "DEBIT",
        referenceType: "PROVIDER_COST",
        amount: providerCost,
        narration: "Provider cost charged",
        serviceProviderId,
        createdBy,
      });

      // ADMIN EXPENSE (COMMISSION WALLET)
      const adminWallet = await WalletEngine.getWallet({
        tx,
        userId: admin.id,
        walletType: "COMMISSION",
      });

      await LedgerEntryService.create(tx, {
        walletId: adminWallet.id,
        transactionId,
        entryType: "DEBIT",
        referenceType: "PROVIDER_COST",
        amount: providerCost,
        narration: "Provider service cost",
        serviceProviderId,
        createdBy,
      });
    }

    // ================= PROVIDER GST =================

    const gstProvider = pricing.gstProvider || 0;

    if (gstProvider > 0) {
      // USER DEBIT
      await LedgerEntryService.create(tx, {
        walletId: userWallet.id,
        transactionId,
        entryType: "DEBIT",
        referenceType: "PROVIDER_GST",
        amount: gstProvider,
        narration: "Provider GST charged",
        serviceProviderId,
        createdBy,
      });

      // ADMIN GST WALLET (INPUT TAX)
      const gstWallet = await WalletEngine.getWallet({
        tx,
        userId: admin.id,
        walletType: "GST",
      });

      await LedgerEngine.create(tx, {
        walletId: gstWallet.id,
        transactionId,
        entryType: "DEBIT",
        referenceType: "PROVIDER_GST",
        amount: gstProvider,
        narration: "Provider GST (Input)",
        serviceProviderId,
        createdBy,
      });
    }

    // GST → ADMIN
    const gstAmount = pricing.gstSurcharge || 0;

    if (gstAmount > 0) {
      const gstWallet = await WalletEngine.getWallet({
        tx,
        userId: admin.id,
        walletType: "GST",
      });

      await WalletEngine.credit(tx, gstWallet, gstAmount);

      await LedgerEntryService.create(tx, {
        walletId: gstWallet.id,
        transactionId,
        entryType: "CREDIT",
        referenceType: "SURCHARGE_GST",
        amount: gstAmount,
        narration: "GST collected on surcharge",
        serviceProviderId,
        createdBy,
      });
    }
  }
}
