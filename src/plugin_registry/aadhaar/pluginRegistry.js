import { ApiError } from "../../utils/ApiError.js";
import AadhaarPlugin from "../../plugin/aadhaar/bulkpe.plugin.js";

function getAadhaarPlugin(providerCode, config) {
  switch (providerCode) {
    case "BULKPE":
      return new AadhaarPlugin(config);

    default:
      throw ApiError.internal("Unknown AADHAAR provider");
  }
}
export default getAadhaarPlugin;
