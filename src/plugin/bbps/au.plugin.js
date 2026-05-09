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

  async getAllCirclesBiller(payload) {
    return this.request("/GetAllCircleBiller", payload);
  }

  async getCircleBiller(payload) {
    return this.request("/GetCircleBiller", payload);
  }

  async getBillerPlans(payload) {
    return this.request("/GetBillerPlans", payload);
  }

  async billerDetails(payload) {
    return this.request("/BillerDetails", payload);
  }

  async billerList(payload) {
    return this.request("/BillerList", payload);
  }

  async billFetch(payload) {
    return this.request("/BillFetch", payload);
  }

  async billPayment(payload) {
    return this.request("/BillPayment", payload);
  }

  async billValidation(payload) {
    return this.request("/BillValidation", payload);
  }

  async transactionStatusMobile(payload) {
    return this.request("/TransactionStatusMobile", payload);
  }

  async transactionStatusRefID(payload) {
    return this.request("/TransactionStatusRefID", payload);
  }

  async raiseComplaint(payload) {
    return this.request("/RaiseComplaint", payload);
  }

  async checkComplaintStatus(payload) {
    return this.request("/CheckComplaintStatus", payload);
  }
}

export default AuBbpsPlugin;
