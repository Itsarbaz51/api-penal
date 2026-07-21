import { ApiError } from "../../utils/ApiError.js";
import BankFundRequestPlugin from "../../plugin/fundRequest/bank.plugin.js";

export function getFundRequestPlugin(providerCode, config) {

  switch (providerCode) {
    case "BANK_TRANSFER":
      return new BankFundRequestPlugin(config);

    default:
      throw ApiError.internal("Unknown Fund Request provider");
  }
}
