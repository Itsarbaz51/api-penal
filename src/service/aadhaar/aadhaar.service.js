import ProviderRoutingResolver from "../../resolvers/provider-routing.resolver.js";
import ProviderResolver from "../../resolvers/provider.resolver.js";
import { ApiError } from "../../utils/ApiError.js";
import BulkpeAadhaarService from "./aadhaar.bulkpe.service.js";

export default class AadhaarService {
  static getService(providerCode) {
    switch (providerCode) {
      case "BULKPE":
        return BulkpeAadhaarService;

      default:
        throw ApiError.badRequest("Unsupported AADHAAR provider");
    }
  }

  // Send OTP
  static async sendOtp(payload, actor, apiKey) {
    const serviceProvider = await ProviderRoutingResolver.resolve({
      apiKeyId: apiKey.id,
      serviceCode: "AADHAAR",
    });

    const Service = this.getService(serviceProvider.provider.code);
    return Service.sendOtp(payload, actor, serviceProvider);
  }

  // Verify OTP
  static async verifyOtp(payload, actor, apiKey) {
    const serviceProvider = await ProviderRoutingResolver.resolve({
      apiKeyId: apiKey.id,
      serviceCode: "AADHAAR",
    });

    const Service = this.getService(serviceProvider.provider.code);
    return Service.verifyOtp(payload, actor, serviceProvider);
  }
}
