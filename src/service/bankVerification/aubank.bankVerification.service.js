import prisma from "../../db/db.js";
import SettlementEngine from "../../engine/settlement.engine.js";
import getBankVerificationPlugin from "../../plugin_registry/bankVerification/pluginRegistry.js";

import { ApiError } from "../../utils/ApiError.js";
import HelperUtils from "../../utils/helper.utils.js";

export default class AuBankVerificationService {
  static async pennyDrop(payload, actor, serviceProvider) {
    const plugin = await getBankVerificationPlugin(
      serviceProvider.provider.code,
      {
        ...serviceProvider.config,
        baseUrl: serviceProvider.baseUrl,
      }
    );

    return prisma.$transaction(async (tx) => {
      const txnId = HelperUtils.generateUniqueId("BANK");

      const { transaction, wallet, pricing, isDuplicate } =
        await SettlementEngine.execute({
          tx,
          actor,
          payload: {
            ...payload,
            txnId,
          },
          serviceProvider,
          paymentMethod: "BANK_VERIFICATION",
        });

      if (isDuplicate) {
        return {
          transactionId: transaction.id,
          status: transaction.status,
        };
      }

      try {
        // const response = await plugin.pennyDrop({
        //   ...payload,
        //   ...serviceProvider.config,
        // });

        let response = {
          retrievalRefNo: "620117296140",
          MSGSTATUS: "SUCCESS",
          resp: [
            {
              respDesc: "Beneficiary Available",
              benName: "Kiran Kumar",
              respCode: "00",
            },
          ],
          txnRefNo: "2620102994582375",
          TXNID: "2620102994582376",
        };

        const providerReference = response?.retrievalRefNo;

        const isSuccess =
          response?.MSGSTATUS === "SUCCESS" ||
          response?.messageStatus === "SUCCESS";

        if (isSuccess) {
          await SettlementEngine.success({
            tx,
            actor,
            transaction,
            wallet,
            serviceProvider,
            service: serviceProvider.service,
            provider: serviceProvider.provider,
            providerReference,
            providerResponse: response,
          });

          return {
            transactionId: transaction.id,
            providerReference,
            status: "SUCCESS",
            data: response.resp,
          };
        }

        await SettlementEngine.failed({
          tx,
          transaction,
          wallet,
          pricing,
          providerReference,
          providerResponse: response,
        });

        throw ApiError.badRequest(
          response?.message ||
            response?.statusMessage ||
            response?.errorMessage ||
            "Bank verification failed"
        );
      } catch (error) {
        await SettlementEngine.failed({
          tx,
          transaction,
          wallet,
          pricing,
          providerResponse: error,
        });

        throw error;
      }
    });
  }

  static async pennyLess(payload, actor, serviceProvider) {
    const plugin = await getBankVerificationPlugin(
      serviceProvider.provider.code,
      {
        ...serviceProvider.config,
        baseUrl: serviceProvider.baseUrl,
      }
    );

    return prisma.$transaction(async (tx) => {
      const txnId = HelperUtils.generateUniqueId("BANK");

      const { transaction, wallet, pricing, isDuplicate } =
        await SettlementEngine.execute({
          tx,
          actor,
          payload: {
            ...payload,
            txnId,
          },
          serviceProvider,
          paymentMethod: "BANK_VERIFICATION",
        });

      if (isDuplicate) {
        return {
          transactionId: transaction.id,
          status: transaction.status,
        };
      }

      try {
        // const response = await plugin.pennyLess({
        //   ...payload,
        //   ...serviceProvider.config,
        // });

        const response = {
          BeneficiaryName: "KAJAL",
          TransactionStatus: {
            ResponseCode: "0",
            ResponseMessage: "Success",
            ExtendedErrorDetails: {
              messages: [
                {
                  code: "00",
                  message: "Beneficiary Available",
                },
              ],
            },
          },
          RetrievalReferenceNumber: "2620202994582638",
        };

        const providerReference = response.RetrievalReferenceNumber;

        const isSuccess =
          response?.TransactionStatus?.ResponseCode === "0" ||
          response?.TransactionStatus?.ExtendedErrorDetails?.messages?.[0]
            ?.code === "00";

        if (isSuccess) {
          await SettlementEngine.success({
            tx,
            actor,
            transaction,
            wallet,
            serviceProvider,
            service: serviceProvider.service,
            provider: serviceProvider.provider,
            providerReference,
            providerResponse: response,
          });

          return {
            success: true,
            transactionId: transaction.id,
            providerReference,
            status: "SUCCESS",
            data: {
              beneficiaryName: response.BeneficiaryName,
              responseCode: response.TransactionStatus.ResponseCode,
              responseMessage: response.TransactionStatus.ResponseMessage,
              message:
                response.TransactionStatus.ExtendedErrorDetails.messages[0]
                  .message,
            },
          };
        }

        await SettlementEngine.failed({
          tx,
          transaction,
          wallet,
          pricing,
          providerReference,
          providerResponse: response,
        });

        throw ApiError.badRequest(
          response?.TransactionStatus?.ExtendedErrorDetails?.messages?.[0]
            ?.message ||
            response?.TransactionStatus?.ResponseMessage ||
            "Penny Less verification failed"
        );
      } catch (error) {
        await SettlementEngine.failed({
          tx,
          transaction,
          wallet,
          pricing,
          providerResponse: error?.response?.data || error,
        });

        throw error;
      }
    });
  }
}
