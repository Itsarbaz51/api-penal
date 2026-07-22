import AuBankPlugin from "../../plugin/bankVarification/aubank.plugin.js";
import { ApiError } from "../../utils/ApiError.js";

export default function getBankVerificationPlugin(providerCode, config) {
  switch (providerCode) {
    case "AU_BANK":
      return new AuBankPlugin(config);

    default:
      throw ApiError.internal("Unknown Bank Verification provider");
  }
}
