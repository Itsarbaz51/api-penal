import WalletEngine from "./wallet.engine.js";
import { ApiError } from "../utils/ApiError.js";
import CommissionEarningService from "../service/commission-earning.service.js";
import LedgerEntryService from "../service/ledger-entry.service.js";

export default class CommissionEngine {
  static async distribute(
    tx,
    {
      transactionId,
      transactionType,
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
    let pool = pricing.providerCost || 0;
    if (pool <= 0) return;

    const serviceProvider = await tx.serviceProvider.findUnique({
      where: { id: serviceProviderId },
    });

    if (!serviceProvider) throw ApiError.notFound("Service provider not found");

    const admin = await tx.user.findFirst({
      where: { parentId: null },
      select: { id: true },
    });

    let currentUser = await tx.user.findUnique({
      where: { id: userId },
      select: { id: true, parentId: true, packageId: true },
    });

    if (!currentUser) return;

    const getRate = async (user) => {
      const rule =
        (await tx.commissionSetting.findFirst({
          where: {
            serviceProviderId,
            mode: "COMMISSION",
            transactionType,
            isActive: true,
            targetUserId: user.id,
          },
        })) ||
        (await tx.commissionSetting.findFirst({
          where: {
            serviceProviderId,
            mode: "COMMISSION",
            transactionType,
            isActive: true,
            packageId: user.packageId,
          },
        }));

      if (!rule) return { type: "FLAT", value: 0 };

      let value = rule.value || 0;
      let type = rule.type;

      if (rule.supportPaymentMethod) {
        const payment = await tx.commissionPaymentMethod.findFirst({
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

      if (rule.supportsSlab && !rule.supportPaymentMethod) {
        const slab = await tx.commissionSlab.findFirst({
          where: {
            minAmount: { lte: pricing.txnAmount },
            maxAmount: { gte: pricing.txnAmount },
          },
        });

        if (slab) {
          value = slab.value;
          type = slab.type || type;
        }
      }

      return { type, value };
    };

    const calcAmount = (rate, txnAmount) => {
      return rate.type === "PERCENTAGE"
        ? (txnAmount * rate.value) / 100
        : rate.value;
    };

    const earningsMap = new Map();

    let currentRate = await getRate(currentUser);
    let previousAmount = calcAmount(currentRate, pricing.txnAmount);

    // USER SHARE
    let userShare = previousAmount > pool ? pool : previousAmount;

    if (userShare > 0) {
      earningsMap.set(currentUser.id, userShare);
      pool -= userShare;
    }

    // PARENT LOOP
    while (currentUser?.parentId && pool > 0) {
      const parent = await tx.user.findUnique({
        where: { id: currentUser.parentId },
        select: { id: true, parentId: true, packageId: true },
      });

      if (!parent) break;

      const parentRate = await getRate(parent);
      const parentAmount = calcAmount(parentRate, pricing.txnAmount);

      let diff = previousAmount - parentAmount;
      if (diff < 0) diff = 0;

      let profit = diff > pool ? pool : diff;

      if (profit > 0) {
        earningsMap.set(parent.id, (earningsMap.get(parent.id) || 0) + profit);
        pool -= profit;
      }

      previousAmount = parentAmount;
      currentUser = parent;
    }

    // REMAINING → ADMIN
    if (pool > 0) {
      earningsMap.set(admin.id, (earningsMap.get(admin.id) || 0) + pool);
    }

    // PAYOUT
    for (const [uid, amount] of earningsMap.entries()) {
      if (amount <= 0) continue;

      let tds = 0;

      if (uid !== admin.id) {
        let tdsPercent = 0;

        if (mapping.supportPaymentMethod) {
          const payment = await tx.commissionSetting.findFirst({
            where: {
              paymentMethod,
              category,
              operator,
              OR: [{ network: cardNetwork }, { network: null }],
            },
          });

          if (payment && payment.tdsPercent !== null) {
            tdsPercent = payment.tdsPercent;
          }
        } else {
          const rule = await tx.commissionSetting.findUnique({
            where: { id: config.ruleId },
            select: { tdsPercent: true },
          });

          if (rule && rule.tdsPercent !== null) {
            tdsPercent = rule.tdsPercent;
          }
        }

        if (tdsPercent > 0) {
          tds = (amount * tdsPercent) / 100;
        }
      }

      const net = amount - tds;

      const wallet = await WalletEngine.getWallet({
        tx,
        userId: uid,
        walletType: "COMMISSION",
      });

      await WalletEngine.credit(tx, wallet, net);

      await CommissionEarningService.create(tx, {
        transactionId,
        userId: uid,
        fromUserId: userId,
        serviceProviderId,

        amount: amount,
        mode: "COMMISSION",
        type: config?.type || "FLAT",
        netAmount: net,

        metadata: {
          txnAmount: pricing.txnAmount,
          tds,
        },

        createdBy,
      });

      await LedgerEntryService.create(tx, {
        walletId: wallet.id,
        transactionId,
        entryType: "CREDIT",
        referenceType: "COMMISSION",
        amount: net,
        narration: "Commission earning (after TDS)",
        serviceProviderId,
        createdBy,
      });

      // ================= TDS WALLET =================

      if (tds > 0) {
        const tdsWallet = await WalletEngine.getWallet({
          tx,
          userId: admin.id,
          walletType: "TDS",
        });

        await WalletEngine.credit(tx, tdsWallet, tds);

        await LedgerEntryService.create(tx, {
          walletId: tdsWallet.id,
          transactionId,
          entryType: "CREDIT",
          referenceType: "COMMISSION_TDS",
          amount: tds,
          narration: "TDS deducted",
          serviceProviderId,
          createdBy,
        });
      }
    }
  }
}
