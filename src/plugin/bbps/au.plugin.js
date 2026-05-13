import axios from "axios";
import BbpsInterface from "./bbps.interface.js";
import { ApiError } from "../../utils/ApiError.js";

class AuBbpsPlugin extends BbpsInterface {
  constructor(config) {
    super();

    this.baseURL = config.baseURL;
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;

    this.http = axios.create({
      baseURL: this.baseURL,
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async request(endpoint, payload) {
    try {
      const response = await this.http.post(endpoint, payload, {
        headers: {
          client_id: this.clientId,
          client_secret: this.clientSecret,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error.response?.data);

      throw ApiError.internal(
        error.response?.data?.message || "AU BBPS API Failed"
      );
    }
  }

  async billerList(payload) {
    return this.request("/BillerList", payload);
  }
}

export default AuBbpsPlugin;
