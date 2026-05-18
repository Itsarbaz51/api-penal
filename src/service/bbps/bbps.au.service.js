import prisma from "../../db/db.js";
import getBbpsPlugin from "../../plugin_registry/bbps/pluginRegistry.js";
import { ApiError } from "../../utils/ApiError.js";
import CryptoService from "../../utils/crypto.utils.js";

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
}
