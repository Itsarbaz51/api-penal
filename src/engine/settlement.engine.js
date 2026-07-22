import WalletEngine from "./wallet.engine.js";
import SurchargeEngine from "./surcharge.engine.js";
import PricingEngine from "./pricing.engine.js";
import { ApiError } from "../utils/ApiError.js";
import CommissionEngine from "./commission.engine.js";
import TransactionService from "../service/transaction.service.js";
import LedgerEntryService from "../service/ledger-entry.service.js";

export async function resolvePricingConfig(
  tx,
  {
    userId,
    serviceProviderId,
    category,
    operator,
    operatorCode,
    paymentMethod,
    cardNetwork,
    transactionType,
    amount,
  }
) {
  const txnAmount = Number(amount);

  const user = await tx.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      packageId: true,
    },
  });

  if (!user) {
    throw ApiError.notFound("User not found");
  }

  const serviceProvider = await tx.serviceProvider.findUnique({
    where: {
      id: serviceProviderId,
    },
  });

  if (!serviceProvider) {
    throw ApiError.notFound("Service provider not found");
  }

  // FIND COMMISSION RULE
  let rule = await tx.commissionSetting.findFirst({
    where: {
      serviceProviderId,
      transactionType,
      isActive: true,

      OR: [
        {
          targetUserId: user.id,
        },
        {
          packageId: user.packageId,
        },
      ],
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  if (!rule) {
    throw ApiError.badRequest(
      "Commission setting not found, Please contect your admin"
    );
  }

  let mode = rule.mode;
  let type = rule.type;
  let value = Number(rule.value || 0);

  // PAYMENT METHOD BASED
  if (rule.supportPaymentMethod) {
    const paymentRule = await tx.commissionSetting.findFirst({
      where: {
        serviceProviderId,
        isActive: true,
        transactionType,
        paymentMethod,

        ...(operatorCode && {
          operatorCode,
        }),

        ...(category && {
          category,
        }),

        ...(operator && {
          operator,
        }),

        OR: [
          {
            network: cardNetwork,
          },
          {
            network: null,
          },
        ],
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    if (paymentRule) {
      mode = paymentRule.mode;
      type = paymentRule.type;
      value = Number(paymentRule.value || 0);

      rule = paymentRule;
    }
  }

  // SLAB BASED
  if (rule.supportsSlab) {
    const slabRule = await tx.commissionSetting.findFirst({
      where: {
        serviceProviderId,
        isActive: true,
        transactionType,
        minAmount: {
          lte: txnAmount,
        },

        maxAmount: {
          gte: txnAmount,
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    if (slabRule) {
      mode = slabRule.mode;
      type = slabRule.type;
      value = Number(slabRule.value || 0);

      rule = slabRule;
    }
  }

  // PROVIDER COST
  const providerType = serviceProvider.pricingValueType;
  const providerValue = Number(serviceProvider.providerCost || 0);

  // TAXES
  const commissionTdsPercent = rule.applyTDS ? Number(rule.tdsPercent || 0) : 0;
  const surchargeGstPercent = rule.applyGST ? Number(rule.gstPercent || 0) : 0;

  const providerTdsPercent = serviceProvider.applyTDS
    ? Number(serviceProvider.tdsPercent || 0)
    : 0;
  const providerGstPercent = serviceProvider.applyGST
    ? Number(serviceProvider.gstPercent || 0)
    : 0;

  return {
    ruleId: rule.id,

    mode,
    type,
    value,

    provider: {
      type: providerType,
      value: providerValue,
    },

    tax: {
      commissionTdsPercent,
      surchargeGstPercent,

      providerTdsPercent,
      providerGstPercent,

      totalTds: commissionTdsPercent + providerTdsPercent,

      totalGst: surchargeGstPercent + providerGstPercent,
    },
  };
}

export default class SettlementEngine {
  static async execute({
    tx,
    actor,
    payload,
    serviceProvider,
    transactionType,
    category,
    operator,
    operatorCode,
    paymentMethod,
    cardNetwork,
  }) {
    const userId = actor.id;

    const wallet = await WalletEngine.getWallet({
      tx,
      userId,
      walletType: "PRIMARY",
    });

    const config = await resolvePricingConfig(tx, {
      userId,
      serviceProviderId: serviceProvider.id,
      transactionType,
      category,
      operator,
      operatorCode,
      paymentMethod,
      cardNetwork,
      amount: payload.amount || 0,
    });

    let pricing;

    if (config.mode === "SURCHARGE") {
      pricing = PricingEngine.calculateSurcharge({
        amount: payload.amount,
        config,
      });
    }

    if (config.mode === "COMMISSION") {
      pricing = PricingEngine.calculateCommission({
        amount: payload.amount,
        config,
      });
    }

    const existingTxn = await tx.transaction.findFirst({
      where: {
        idempotencyKey: payload.idempotencyKey,
        userId,
      },
    });

    if (existingTxn) {
      return {
        transaction: existingTxn,
        wallet: null,
        pricing: existingTxn.pricing,
        isDuplicate: true,
      };
    }

    const holdWallet = await WalletEngine.hold(tx, wallet, pricing.totalDebit);

    const { transaction } = await TransactionService.create(tx, {
      userId,
      txnId: payload.txnId,
      walletId: wallet.id,

      serviceProviderId: serviceProvider.id,

      serviceCode: serviceProvider.service.code,
      providerCode: serviceProvider.provider.code,

      amount: pricing.totalDebit,

      pricing: { ...pricing, mode: config.mode, config },

      idempotencyKey: payload.idempotencyKey,

      requestInit: payload,
    });

    return { transaction, wallet: holdWallet, pricing };
  }

  static async success({
    tx,
    actor,
    transaction,
    wallet,
    serviceProvider,
    providerReference,
    providerResponse,
    service,
    provider,
    category,
    paymentMethod,
    cardNetwork,
    operator,
  }) {
    if (transaction?.status === "SUCCESS") return;

    const pricing = transaction.pricing;
    const config = pricing.config;

    await WalletEngine.captureHold(tx, wallet, transaction?.amount);

    await LedgerEntryService.create(tx, {
      walletId: transaction?.walletId,
      transactionId: transaction?.id,
      entryType: "DEBIT",
      referenceType: `${service.code} TRANSACTION`,
      serviceProviderId: serviceProvider?.id,
      amount: transaction?.amount,
      narration: `${service.code} (${provider.code}) debit`,
      createdBy: actor.id,
    });

    if (pricing.mode === "SURCHARGE") {
      await SurchargeEngine.distribute(tx, {
        transactionId: transaction?.id,
        userId: actor.id,
        createdBy: actor.id,
        pricing,
        serviceProviderId: serviceProvider?.id,
        category,
        operator,
        paymentMethod,
        cardNetwork,
        config,
      });
    }

    if (pricing.mode === "COMMISSION") {
      await CommissionEngine.distribute(tx, {
        transactionId: transaction?.id,
        userId: actor.id,
        createdBy: actor.id,
        pricing,
        serviceProviderId: serviceProvider?.id,
        category,
        operator,
        paymentMethod,
        cardNetwork,
        config,
      });
    }

    await TransactionService.success({
      tx,
      transactionId: transaction?.id,
      providerReference,
      providerResponse,
    });
  }

  static async failed({
    tx,
    transaction,
    wallet,
    pricing,
    providerReference,
    providerResponse,
  }) {
    await WalletEngine.releaseHold(tx, wallet, pricing.totalDebit);

    await TransactionService.failed(tx, transaction.id, {
      providerReference,
      providerResponse,
    });
  }
}
