import prisma from "../../db/db.js";
import WalletEngine from "../../engine/wallet.engine.js";
import { getFundRequestPlugin } from "../../plugin_registry/fundRequest/pluginRegistry.js";
import { ApiError } from "../../utils/ApiError.js";
import HelperUtils from "../../utils/helper.utils.js";
import s3ServiceUtils from "../../utils/s3Service.utils.js";
import LedgerEntryService from "../ledger-entry.service.js";
import TransactionService from "../transaction.service.js";

export default class BankFundRequestService {
  static async create(payload, file, actor, serviceProvider) {
    try {
      if (serviceProvider.provider.code === "BANK_TRANSFER") {
        if (!payload.rrn) {
          throw ApiError.badRequest("RRN required");
        }

        if (!file) {
          throw ApiError.badRequest("Payment screenshot required");
        }
      }

      const plugin = getFundRequestPlugin(
        serviceProvider.provider.code,
        serviceProvider.config
      );

      const providerResponse = await plugin.createRequest(payload);

      let paymentImageUrl = null;

      if (file) {
        paymentImageUrl = await s3ServiceUtils.upload(
          file?.path,
          "fund-request"
        );
      }

      return await prisma.$transaction(async (tx) => {
        const wallet = await WalletEngine.getWallet({
          tx,
          userId: actor.id,
          walletType: "PRIMARY",
        });

        const txnId = HelperUtils.generateUniqueId("FR");

        const { transaction } = await TransactionService.create(tx, {
          txnId,
          userId: actor.id,
          walletId: wallet.id,
          serviceProviderId: serviceProvider.id,
          serviceCode: serviceProvider.service.code,
          providerCode: serviceProvider.provider.code,
          amount: providerResponse.amount,
          providerReference: payload.rrn,
          pricing: {
            amount: providerResponse.amount,
          },
          idempotencyKey: payload.idempotencyKey,
          requestInit: {
            amount: payload.amount,
            rrn: payload.rrn,
            transactionDate: payload.transactionDate,
            paymentImageUrl,
          },
        });

        return {
          transactionId: transaction.id,
          txnId: transaction.txnId,
          amount: transaction.amount,
          status: transaction.status,
          providerReference: payload.rrn,
          paymentImageUrl,
        };
      });
    } finally {
      if (file?.path) {
        await HelperUtils.deleteOldImage(file?.path);
      }
    }
  }

  static async verifyRequest(payload, actor, serviceProvider) {
    if (actor.role !== "SUPER_ADMIN") {
      throw ApiError.forbidden("Only Super Admin can verify fund requests");
    }

    const { transactionId, action, reason } = payload;

    if (!["APPROVE", "REJECT"].includes(action)) {
      throw ApiError.badRequest("Invalid action");
    }

    return prisma.$transaction(async (tx) => {
      const transaction = await tx.transaction.findUnique({
        where: {
          id: transactionId,
        },
      });

      if (!transaction) {
        throw ApiError.notFound("Transaction not found");
      }

      const wallet = await WalletEngine.getWallet({
        tx,
        userId: transaction.userId,
        walletType: "PRIMARY",
      });

      // APPROVE
      if (action === "APPROVE") {
        if (transaction.status === "SUCCESS") {
          throw ApiError.badRequest("Transaction already approved");
        }

        if (transaction.status !== "PENDING") {
          throw ApiError.badRequest(
            `Cannot approve ${transaction.status} transaction`
          );
        }

        // CREDIT USER WALLET
        await WalletEngine.credit(tx, wallet, transaction.amount);

        // LEDGER
        await LedgerEntryService.create(tx, {
          walletId: wallet.id,
          transactionId: transaction.id,
          entryType: "CREDIT",
          referenceType: "FUND_REQUEST",
          amount: transaction.amount,
          narration: "Fund Request Approved",
          createdBy: actor.id,
          serviceProviderId: transaction.serviceProviderId,
        });

        // UPDATE TXN

        await TransactionService.success({
          tx,
          transactionId: transaction.id,
          providerReference: transaction.providerReference,
          providerResponse: {
            approvedBy: actor.id,
            approvedAt: new Date(),
          },
        });

        return {
          status: "SUCCESS",
        };
      }

      // REJECT
      if (!reason?.trim()) {
        throw ApiError.badRequest("Reject reason required");
      }

      if (transaction.status === "FAILED") {
        throw ApiError.badRequest("Transaction already rejected");
      }

      // SUCCESS -> FAILED
      // Reverse wallet

      if (transaction.status === "SUCCESS") {
        await WalletEngine.debit(tx, wallet, transaction.amount);

        await LedgerEntryService.create(tx, {
          walletId: wallet.id,
          transactionId: transaction.id,
          entryType: "DEBIT",
          referenceType: "FUND_REQUEST",
          amount: transaction.amount,
          narration: "Fund Request Reversed",
          createdBy: actor.id,
          serviceProviderId: transaction.serviceProviderId,
        });
      }

      await TransactionService.failed(tx, transaction.id, {
        providerReference: transaction.providerReference,
        providerResponse: {
          rejectedBy: actor.id,
          rejectedAt: new Date(),
          reason,
        },
      });

      return {
        status: "FAILED",
        reason,
        message: "Fund request rejected",
      };
    });
  }

  static async checkStatus(payload, actor) {
    const { transactionId } = payload;

    const transaction = await prisma.transaction.findUnique({
      where: {
        id: transactionId,
      },

      include: {
        user: {
          select: {
            id: true,
            registrationNumber: true,
            fullName: true,
            phoneNumber: true,
          },
        },

        wallet: {
          select: {
            walletType: true,
          },
        },

        serviceProvider: {
          include: {
            service: true,
            provider: true,
          },
        },
      },
    });

    if (!transaction) {
      throw ApiError.notFound("Transaction not found");
    }

    // ===============================
    // PERMISSION
    // ===============================

    if (actor.role !== "SUPER_ADMIN" && transaction.userId !== actor.id) {
      throw ApiError.forbidden("You are not allowed to view this request");
    }

    const request = transaction.requestInit || {};
    const response = transaction.providerResponse || {};

    return {
      transactionId: transaction.id,
      txnId: transaction.txnId,
      status: transaction.status,
      amount: transaction.amount,
      provider: {
        service: transaction.serviceProvider?.service?.code,
        provider: transaction.serviceProvider?.provider?.code,
      },
    };
  }
}
