import prisma from "../../db/db.js";
import SettlementEngine from "../../engine/settlement.engine.js";
import getBbpsPlugin from "../../plugin_registry/bbps/pluginRegistry.js";
import { ApiError } from "../../utils/ApiError.js";
import CryptoService from "../../utils/crypto.utils.js";
import crypto from "node:crypto";
import HelperUtils from "../../utils/helper.utils.js";

export default class AuBbpsService {
  // BILLER LIST
  static async category(payload, actor, serviceProvider) {
    // CHECK CACHE (24 HOURS)
    const latestBiller = await prisma.bbpsBiller.findFirst({
      where: {
        providerId: serviceProvider.providerId,
      },

      orderBy: {
        updatedAt: "desc",
      },

      select: {
        updatedAt: true,
      },
    });

    const isFresh =
      latestBiller &&
      Date.now() - new Date(latestBiller.updatedAt).getTime() <
        24 * 60 * 60 * 1000;

    // RETURN DB CACHE
    if (isFresh) {
      return prisma.bbpsCategory.findMany({
        select: {
          id: true,
          name: true,
          code: true,
          updatedAt: true,
        },

        orderBy: {
          name: "asc",
        },
      });
    }

    // PROVIDER API
    const plugin = getBbpsPlugin(
      serviceProvider.provider.code,
      serviceProvider.config
    );

    const config = serviceProvider.config || {};

    const requestPayload = {
      RequestId: `REQ${Date.now()}`,

      OriginatingChannel: config.originatingChannel || "CRM",

      Header: {
        Ver: config.version || "1.0",

        OrigInst: config.origInst || "AU01",

        RefId: `REF${Date.now()}`,

        TimeStamp: new Date().toISOString(),
      },

      ReferenceNumber: `${Date.now()}`,

      ReportingParam: {
        MISClass: config.misClass || "API",

        MISCode: actor.registrationNumber || actor.id,
      },
    };

    const response = await plugin.billerList(requestPayload);

    if (!response?.billers || !Array.isArray(response.billers)) {
      throw ApiError.internal("Invalid provider response");
    }

    // STORE DATA
    for (const item of response.billers) {
      // CATEGORY
      const categoryName = item.billerCategoryName?.trim() || "OTHER";

      const categoryCode = categoryName
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "_");

      // CATEGORY UPSERT
      const category = await prisma.bbpsCategory.upsert({
        where: {
          code: categoryCode,
        },

        update: {
          name: categoryName,
        },

        create: {
          name: categoryName,

          code: categoryCode,
        },
      });

      // BILLER UPSERT
      await prisma.bbpsBiller.upsert({
        where: {
          providerId_billerId: {
            providerId: serviceProvider.providerId,

            billerId: item.billerId,
          },
        },

        update: {
          categoryId: category.id,

          billerName: item.billerName,

          aliasName: item.billerAliasName,

          status: item.status,

          lastUpdated: item.lastUpdated,

          metadata: item,
        },

        create: {
          providerId: serviceProvider.providerId,

          categoryId: category.id,

          billerId: item.billerId,

          billerName: item.billerName,

          aliasName: item.billerAliasName,

          status: item.status,

          lastUpdated: item.lastUpdated,

          metadata: item,
        },
      });
    }

    // RETURN GROUPED RESPONSE
    return await prisma.bbpsCategory.findMany({
      select: {
        id: true,
        name: true,
        code: true,
        updatedAt: true,
      },

      orderBy: {
        name: "asc",
      },
    });
  }

  static async billers(payload, actor, serviceProvider) {
    if (!payload.categoryCode) {
      throw ApiError.badRequest("categoryCode required");
    }

    // ============================================
    // CHECK CACHE
    // ============================================

    const latestBiller = await prisma.bbpsBiller.findFirst({
      where: {
        providerId: serviceProvider.providerId,
      },

      orderBy: {
        updatedAt: "desc",
      },

      select: {
        updatedAt: true,
      },
    });

    const isFresh =
      latestBiller &&
      Date.now() - new Date(latestBiller.updatedAt).getTime() <
        24 * 60 * 60 * 1000;

    // ============================================
    // RETURN CACHE
    // ============================================

    if (isFresh) {
      return prisma.bbpsBiller.findMany({
        where: {
          providerId: serviceProvider.providerId,

          category: {
            code: payload.categoryCode,
          },
        },

        select: {
          billerId: true,

          billerName: true,

          aliasName: true,

          status: true,

          lastUpdated: true,
        },

        orderBy: {
          billerName: "asc",
        },
      });
    }

    // ============================================
    // PROVIDER API
    // ============================================

    const plugin = getBbpsPlugin(
      serviceProvider.provider.code,
      serviceProvider.config
    );

    const config = serviceProvider.config || {};

    const requestPayload = {
      RequestId: `REQ${Date.now()}`,

      OriginatingChannel: config.originatingChannel || "CRM",

      Header: {
        Ver: config.version || "1.0",

        OrigInst: config.origInst || "AU01",

        RefId: `REF${Date.now()}`,

        TimeStamp: new Date().toISOString(),
      },

      Search: {
        Category: payload.categoryCode,
        LastUpdated: "",
      },

      ReferenceNumber: `${Date.now()}`,

      ReportingParam: {
        MISClass: config.misClass || "API",

        MISCode: actor.registrationNumber || actor.id,
      },
    };

    const response = await plugin.billerList(requestPayload);

    if (!response?.billers || !Array.isArray(response.billers)) {
      throw ApiError.internal("Invalid provider response");
    }

    // ============================================
    // STORE DATA
    // ============================================

    for (const item of response.billers) {
      const categoryName = item.billerCategoryName?.trim() || "OTHER";

      const categoryCode = categoryName
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "_");

      // CATEGORY
      const category = await prisma.bbpsCategory.upsert({
        where: {
          code: categoryCode,
        },

        update: {
          name: categoryName,
        },

        create: {
          name: categoryName,

          code: categoryCode,
        },
      });

      // BILLER
      await prisma.bbpsBiller.upsert({
        where: {
          providerId_billerId: {
            providerId: serviceProvider.providerId,

            billerId: item.billerId,
          },
        },

        update: {
          categoryId: category.id,

          billerName: item.billerName,

          aliasName: item.billerAliasName,

          status: item.status,

          lastUpdated: item.lastUpdated,
        },

        create: {
          providerId: serviceProvider.providerId,

          categoryId: category.id,

          billerId: item.billerId,

          billerName: item.billerName,

          aliasName: item.billerAliasName,

          status: item.status,

          lastUpdated: item.lastUpdated,
        },
      });
    }

    // ============================================
    // RETURN BILLERS
    // ============================================

    return prisma.bbpsBiller.findMany({
      where: {
        providerId: serviceProvider.providerId,

        category: {
          code: payload.categoryCode,
        },
      },

      select: {
        billerId: true,

        billerName: true,

        aliasName: true,

        status: true,

        lastUpdated: true,
      },

      orderBy: {
        billerName: "asc",
      },
    });
  }

  static async billerDetails(payload, actor, serviceProvider) {
    if (!payload.billerId) {
      throw ApiError.badRequest("billerId required");
    }

    // ============================================
    // EXISTING DETAILS CHECK
    // ============================================

    const existingBiller = await prisma.bbpsBiller.findFirst({
      where: {
        providerId: serviceProvider.providerId,

        billerId: payload.billerId,
      },

      include: {
        category: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },

        bbpsCustomerParams: {
          select: {
            paramName: true,
            displayName: true,
            dataType: true,
            minLength: true,
            maxLength: true,
            isOptional: true,
          },
        },
      },
    });

    // ============================================
    // CACHE 24 HOURS
    // ============================================

    if (
      existingBiller?.detailsFetchedAt &&
      Date.now() - new Date(existingBiller.detailsFetchedAt).getTime() <
        24 * 60 * 60 * 1000
    ) {
      return {
        billerId: existingBiller.billerId,

        billerName: existingBiller.billerName,

        aliasName: existingBiller.aliasName,

        category: existingBiller.category,

        status: existingBiller.status,

        fetchRequirement: existingBiller.fetchRequirement,

        paymentAmountExactness: existingBiller.paymentAmountExactness,

        supportBillValidation: existingBiller.supportBillValidation,

        supportsAdhoc: existingBiller.supportsAdhoc,

        customerParams: existingBiller.bbpsCustomerParams,
      };
    }

    // ============================================
    // PROVIDER API
    // ============================================

    const plugin = getBbpsPlugin(
      serviceProvider.provider.code,
      serviceProvider.config
    );

    const config = serviceProvider.config || {};

    const requestPayload = {
      RequestId: `REQ${Date.now()}`,

      OriginatingChannel: config.originatingChannel || "CRM",

      Header: {
        Ver: config.version || "1.0",

        OrigInst: config.origInst || "AU01",

        RefId: `REF${Date.now()}`,

        TimeStamp: new Date().toISOString(),
      },

      ReferenceNumber: `${Date.now()}`,

      ReportingParam: {
        MISClass: config.misClass || "API",

        MISCode: actor.registrationNumber || actor.id,
      },

      Biller: {
        BillerId: payload.billerId,
      },
    };

    const response = await plugin.billerDetails(requestPayload);

    if (!response?.biller) {
      throw ApiError.internal("Invalid provider response");
    }

    const item = response.biller;

    // ============================================
    // UPDATE BILLER
    // ============================================

    const updatedBiller = await prisma.bbpsBiller.update({
      where: {
        providerId_billerId: {
          providerId: serviceProvider.providerId,

          billerId: item.billerId,
        },
      },

      data: {
        fetchRequirement: item.fetchRequirement,

        paymentAmountExactness: item.paymentAmountExactness,

        supportBillValidation: item.supportBillValidation,

        billerMode: item.billerMode,

        billerCoverage: item.billerCoverage,

        ownerShip: item.billerOwnerShp,

        supportsAdhoc: item.billerAcceptsAdhoc,

        isParentBiller: item.parentBiller,

        metadata: item,

        detailsFetchedAt: new Date(),
      },
    });

    // ============================================
    // DELETE OLD PARAMS
    // ============================================

    await prisma.bbpsCustomerParam.deleteMany({
      where: {
        billerId: updatedBiller.id,
      },
    });

    // ============================================
    // STORE PARAMS
    // ============================================

    if (Array.isArray(item.billerCustomerParams)) {
      await prisma.bbpsCustomerParam.createMany({
        data: item.billerCustomerParams.map((param) => ({
          billerId: updatedBiller.id,

          paramName: param.paramName,

          displayName: param.paramName,

          dataType: param.dataType || "STRING",

          minLength: param.minLength,

          maxLength: param.maxLength,

          isOptional: param.optional || false,

          visibility: param.visibility,

          isUnique: param.unique,
        })),
      });
    }

    // ============================================
    // RETURN CLEAN RESPONSE
    // ============================================

    const finalBiller = await prisma.bbpsBiller.findUnique({
      where: {
        id: updatedBiller.id,
      },

      include: {
        category: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },

        bbpsCustomerParams: {
          select: {
            paramName: true,
            displayName: true,
            dataType: true,
            minLength: true,
            maxLength: true,
            isOptional: true,
          },
        },
      },
    });

    return {
      billerId: finalBiller.billerId,
      billerName: finalBiller.billerName,
      aliasName: finalBiller.aliasName,
      category: finalBiller.category,
      status: finalBiller.status,
      fetchRequirement: finalBiller.fetchRequirement,
      paymentAmountExactness: finalBiller.paymentAmountExactness,
      supportBillValidation: finalBiller.supportBillValidation,
      supportsAdhoc: finalBiller.supportsAdhoc,
      customerParams: finalBiller.bbpsCustomerParams,
    };
  }

  static async billFetch(payload, actor, serviceProvider) {
    const plugin = getBbpsPlugin(
      serviceProvider.provider.code,
      serviceProvider.config
    );

    const config = serviceProvider.config || {};

    // BILLER
    const biller = await prisma.bbpsBiller.findFirst({
      where: {
        providerId: serviceProvider.providerId,
        billerId: payload.billerId,
      },
    });

    if (!biller) {
      throw ApiError.notFound("Biller not found");
    }

    const generate35 = () => {
      let id = "";

      while (id.length < 35) {
        id += crypto.randomBytes(32).toString("hex");
      }

      return id.substring(0, 35);
    };

    const ts = new Date().toISOString().replace("Z", "+05:30");

    const reference = generate35();
    const msgId = generate35();

    const requestPayload = {
      head: {
        ver: config.version || "1.0",
        ts: ts,
        origInst: config.origInst || "AU01",
        refId: reference,
      },

      analytics: [
        {
          name: "FETCHREQUESTSTART",
          value: ts,
        },
        {
          name: "FETCHREQUESTEND",
          value: ts,
        },
      ],

      txn: {
        riskScores: [
          {
            value: "030",
            provider: config.origInst || "AU01",
            type: "TXNRISK",
          },
          {
            value: "030",
            provider: "BBPS",
            type: "TXNRISK",
          },
        ],

        ts: ts,
        msgId: msgId,
      },

      customer: {
        mobile: payload.mobile || actor.phoneNumber,

        tags: payload.email
          ? [
              {
                name: "EMAIL",
                value: payload.email,
              },
            ]
          : [],
      },

      agent: {
        device: [
          {
            name: "INITIATING_CHANNEL",
            value: "BNKBRNCH",
          },
          {
            name: "IFSC",
            value: config.ifsc || "AUBL0002341",
          },
          {
            name: "MOBILE",
            value: payload.mobile || actor.phoneNumber,
          },
          {
            name: "GEOCODE",
            value: config.geoCode || "28.6139,78.5555",
          },
          {
            name: "POSTAL_CODE",
            value: config.postalCode || "600001",
          },
        ],

        id: config.agentId || "AU01AU02BNK525314030",
      },

      billDetails: {
        billerId: payload.billerId,

        customerParams: payload.customerParams.map((p) => ({
          name: p.name,
          value: String(p.value),
        })),
      },
    };


    const response = await plugin.billFetch(requestPayload);

    if (response?.reason?.responseCode !== "000") {
      throw ApiError.badRequest(
        response?.reason?.responseReason == "Failure"
          ? response?.reason?.complianceReason
          : response?.reason?.responseReason || "Bill fetch failed"
      );
    }

    // PARAM HASH
    const customerParamsKey = crypto
      .createHash("sha256")
      .update(JSON.stringify(payload.customerParams))
      .digest("hex");

    // SAVE FETCH
    const fetch = await prisma.bbpsFetchBill.create({
      data: {
        userId: actor.id,
        serviceProviderId: serviceProvider.id,
        billerId: biller.id,
        clientReferenceId: payload.clientReferenceId,
        reference,
        fetchId: response.txn?.msgId || msgId,
        providerReference: response.reason?.approvalRefNum,
        providerResponseCode: response.reason?.responseCode,
        providerResponseMessage: response.reason?.responseReason,
        customerParams:
          response.billDetails?.customerParams || payload.customerParams,
        customerParamsKey,
        amount: Number(response.billerResponse?.amount || 0),

        status: response?.reason?.responseReason,

        customerName: response.billerResponse?.customerName,
        dueDate: response.billerResponse?.dueDate
          ? new Date(response.billerResponse.dueDate)
          : null,

        rawResponse: response,
      },
    });

    // RETURN CLEAN
    return {
      clientReferenceId: fetch.clientReferenceId,
      reference: fetch.reference,
      fetchId: fetch.fetchId,
      providerReference: fetch.providerReference,
      customerName: fetch.customerName,
      amount: fetch.amount,
      dueDate: fetch.dueDate,
      status: fetch.status,
      additionalInfo: response.additionalInfoList || [],
    };
  }

  static async billPay(payload, actor, serviceProvider) {
    const plugin = getBbpsPlugin(
      serviceProvider.provider.code,
      serviceProvider.config
    );

    const config = serviceProvider.config || {};

    const fetch = await prisma.bbpsFetchBill.findUnique({
      where: {
        fetchId: payload.fetchId,
      },
      include: {
        biller: true,
      },
    });

    if (!fetch) {
      throw ApiError.notFound("Fetch bill not found");
    }

    // requestPayload build code same rahega
    // requestPayload
    return prisma.$transaction(async (tx) => {
      const txnId = HelperUtils.generateUniqueId("BBPS");

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
          paymentMethod: "BBPS",
          cardNetwork: null,
        });

      if (isDuplicate) {
        return {
          transactionId: transaction.id,
          status: transaction.status,
        };
      }

      try {
        const response = await plugin.billPayment(requestPayload);
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
