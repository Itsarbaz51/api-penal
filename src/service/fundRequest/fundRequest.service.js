import prisma from "../../db/db.js";
import ProviderRoutingResolver from "../../resolvers/provider-routing.resolver.js";
import { ApiError } from "../../utils/ApiError.js";
import BankFundRequestService from "./fundRequest.bank.service.js";

export default class FundRequestService {
  static getService(providerCode) {
    switch (providerCode) {
      case "BANK_TRANSFER":
        return BankFundRequestService;

      default:
        throw ApiError.badRequest("Unsupported Fund Request provider");
    }
  }

  static async getServiceProvide(apiKeyId, providerCode) {
    const serviceProvider = await ProviderRoutingResolver.resolve({
      userId: actor.id,
      serviceCode: "FUND_REQUEST",
    });

    if (!serviceProvider) {
      throw ApiError.internal(
        "Internal serviceProvider ProviderRoutingResolver"
      );
    }

    return serviceProvider;
  }

  static async create(payload, file, actor, apiKey) {
    const serviceProvider = await ProviderRoutingResolver.resolve({
      userId: actor.id,
      serviceCode: "FUND_REQUEST",
    });

    const Service = this.getService(serviceProvider?.provider?.code);
    return Service.create(payload, file, actor, serviceProvider);
  }

  static async verify(payload, actor) {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id: payload.transactionId,
      },
      include: {
        serviceProvider: {
          include: {
            provider: true,
            service: true,
          },
        },
      },
    });

    const Service = this.getService(transaction.serviceProvider.provider.code);
    return Service.verifyRequest(payload, actor, transaction.serviceProvider);
  }

  static async checkStatus(payload, actor, apiKey) {
    const serviceProvider = await this.getServiceProvide(
      apiKey?.id,
      "FUND_REQUEST"
    );
    const Service = this.getService(serviceProvider.provider.code);
    return Service.checkStatus(payload, actor, serviceProvider);
  }
}
