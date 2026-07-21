import { ApiError } from "../../utils/ApiError.js";

export default class BankVerificationPluginInterface {
  constructor(config) {
    if (!config) {
      throw ApiError.internal("Plugin config is required");
    }

    this.config = config;
  }

  async pennyDrop(_params) {
    throw ApiError.internal(
      `${this.constructor.name} must implement pennyDrop()`
    );
  }

  async pennyLess(_params) {
    throw ApiError.internal(
      `${this.constructor.name} must implement pennyLess()`
    );
  }
}
