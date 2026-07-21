import ProviderRoutingResolver from "../../resolvers/provider-routing.resolver.js";
import { ApiError } from "../../utils/ApiError.js";

import AuBankVerificationService from "./aubank.bankVerification.service.js";

export default class BankVerificationService {
  static getService(providerCode) {
    switch (providerCode) {
      case "AUBANK":
        return AuBankVerificationService;

      default:
        throw ApiError.badRequest("Unsupported BANK VERIFICATION provider");
    }
  }

  static async pennyDrop(payload, actor, apiKey) {
    const serviceProvider = await ProviderRoutingResolver.resolve({
      apiKeyId: apiKey?.id,
      serviceCode: "BANK_VERIFICATION",
    });

    const Service = this.getService(serviceProvider.provider.code);

    return Service.pennyDrop(payload, actor, serviceProvider);
  }

  static async pennyLess(payload, actor, apiKey) {
    const serviceProvider = await ProviderRoutingResolver.resolve({
      apiKeyId: apiKey?.id,
      serviceCode: "BANK_VERIFICATION",
    });

    const Service = this.getService(serviceProvider.provider.code);

    return Service.pennyLess(payload, actor, serviceProvider);
  }
}
