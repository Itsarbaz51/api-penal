import prisma from "../../db/db.js";
import SettlementEngine from "../../engine/settlement.engine.js";
import getAadhaarPlugin from "../../plugin_registry/aadhaar/pluginRegistry.js";
import { ApiError } from "../../utils/ApiError.js";
import CryptoService from "../../utils/crypto.utils.js";
import crypto from "node:crypto";
import HelperUtils from "../../utils/helper.utils.js";

export default class BulkpeAadhaarService {
  // send OTP
  static async sendOtp(payload, actor, serviceProvider) {
    const { aadhaarNumber } = payload;
    if (!aadhaarNumber) {
      throw ApiError.badRequest("AADHAAR number is required");
    }

    // PROVIDER API
    const plugin = getAadhaarPlugin(
      serviceProvider.provider.code,
      serviceProvider.config
    );

    const response = await plugin.sendOtp(requestPayload);

    if (!response.status) {
      throw ApiError.badRequest(response.message || "Failed to send OTP");
    }
    return response.data;
  }

  static async OtpVerify(payload, actor, serviceProvider) {
    const plugin = getAadhaarPlugin(
      serviceProvider.provider.code,
      serviceProvider.config
    );

    const config = serviceProvider.config || {};

    return prisma.$transaction(async (tx) => {
      const txnId = HelperUtils.generateUniqueId("AADHAAR");

      const { transaction, wallet, pricing, isDuplicate } =
        await SettlementEngine.execute({
          tx,
          actor,
          payload: {
            ...payload,
            txnId,
          },
          serviceProvider,
          category: fetch?.rawResponse?.data?.category,
          operator: fetch?.rawResponse?.data?.operator,
          operatorCode: fetch?.rawResponse?.data?.operatorCode,
          paymentMethod: "AADHAAR_OTP",
          cardNetwork: null,
        });

      if (isDuplicate) {
        return {
          transactionId: transaction.id,
          status: transaction.status,
        };
      }

      try {
        const response = await plugin.OtpVerify(payload);

        console.log(response);

        const responseCode = response?.reason?.responseCode;

        // SUCCESS
        if (responseCode === "000") {
          await SettlementEngine.success({
            tx,
            actor,
            transaction,
            wallet,
            serviceProvider,
            pricing,
            providerReference: response.reason?.approvalRefNum,
            providerResponse: response,
          });

          return {
            transactionId: transaction.id,
            txnReferenceId: response.txn?.txnReferenceId,
            providerReference: response.reason?.approvalRefNum,
            status: "SUCCESS",
            response,
          };
        }

        // PENDING
        if (responseCode === "009" || responseCode === "091") {
          await TransactionService.pending(tx, transaction.id, {
            providerReference: response.reason?.approvalRefNum,
            providerResponse: response,
          });

          return {
            transactionId: transaction.id,
            status: "PENDING",
            response,
          };
        }

        // FAILED
        await SettlementEngine.failed({
          tx,
          wallet,
          pricing,
        });

        throw ApiError.badRequest(
          response?.reason?.complianceReason ||
            response?.reason?.responseReason ||
            "Bill payment failed"
        );
      } catch (error) {
        await SettlementEngine.failed({
          tx,
          wallet,
          pricing,
        });

        throw error;
      }
    });
  }
}
