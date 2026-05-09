import { getBbpsPlugin } from "../../plugin_registry/bbps/pluginRegistry.js";

class BbpsService {
  static async execute({ providerCode, method, payload, providerConfig }) {
    const plugin = getBbpsPlugin(providerCode, providerConfig);

    // method validation
    if (typeof plugin[method] !== "function") {
      throw new Error(`${method} not supported in ${providerCode}`);
    }

    // execute provider method
    const response = await plugin[method](payload);

    return {
      provider: providerCode,
      method,
      response,
    };
  }
}

export default BbpsService;
