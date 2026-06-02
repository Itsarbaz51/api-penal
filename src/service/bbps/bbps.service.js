import ProviderRoutingResolver from "../../resolvers/provider-routing.resolver.js";
import ProviderResolver from "../../resolvers/provider.resolver.js";
import { ApiError } from "../../utils/ApiError.js";
import AuBbpsService from "./bbps.au.service.js";

export default class BbpsService {
  static getService(providerCode) {
    switch (providerCode) {
      case "AU_BANK":
        return AuBbpsService;

      default:
        throw ApiError.badRequest("Unsupported BBPS provider");
    }
  }

  // CATEGORIES
  static async categories(payload, actor, apiKey) {
    const serviceProvider = await ProviderRoutingResolver.resolve({
      apiKeyId: apiKey.id,
      serviceCode: "BBPS",
    });

    const Service = this.getService(serviceProvider.provider.code);

    return Service.category(payload, actor, serviceProvider);
  }

  // BILLERS
  static async billers(payload, actor, apiKey) {
    const serviceProvider = await ProviderRoutingResolver.resolve({
      apiKeyId: apiKey.id,
      serviceCode: "BBPS",
    });

    const Service = this.getService(serviceProvider.provider.code);

    return Service.billers(payload, actor, serviceProvider);
  }

  static async billerDetails(payload, actor, apiKey) {
    const serviceProvider = await ProviderRoutingResolver.resolve({
      apiKeyId: apiKey.id,
      serviceCode: "BBPS",
    });

    const Service = this.getService(serviceProvider.provider.code);

    return Service.billerDetails(payload, actor, serviceProvider);
  }

  static async billFetch(payload, actor, apiKey) {
    const serviceProvider = await ProviderRoutingResolver.resolve({
      apiKeyId: apiKey.id,
      serviceCode: "BBPS",
    });

    const Service = this.getService(serviceProvider.provider.code);

    return Service.billFetch(payload, actor, serviceProvider);
  }

  static async billPay(payload, actor, apiKey) {
    const serviceProvider = await ProviderRoutingResolver.resolve({
      apiKeyId: apiKey.id,
      serviceCode: "BBPS",
    });

    const Service = this.getService(serviceProvider.provider.code);

    return Service.billPay(payload, actor, serviceProvider);
  }
}
