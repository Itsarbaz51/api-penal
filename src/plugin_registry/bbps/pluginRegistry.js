import { ApiError } from "../../utils/ApiError.js";
import AuBbpsPlugin from "../../plugin/bbps/au.plugin.js";

function getBbpsPlugin(providerCode, config) {
  switch (providerCode) {
    case "AU_BANK":
      return new AuBbpsPlugin(config);

    default:
      throw ApiError.internal("Unknown BBPS provider");
  }
}
export default getBbpsPlugin;
