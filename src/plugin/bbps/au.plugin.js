import axios from "axios";

import BbpsInterface from "./bbps.interface.js";

import { ApiError } from "../../utils/ApiError.js";

class AuBbpsPlugin extends BbpsInterface {
  constructor(config) {
    super();

    this.baseURL = config.baseURL;
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.key = config.key;
    this.iv = config.iv;
    this.accessToken = config.accessToken;
    this.timeout = config.timeout || 30000;
    this.http = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "Content-Type": "application/json",
        key: this.key,
        iv: this.iv,
      },
    });
  }

  // COMMON REQUEST
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
      console.log("AU BBPS ERROR =>", error.response?.data || error.message);

      throw ApiError.internal(
        JSON.stringify(error.response?.data) ||
          JSON.stringify(error.message) ||
          "AU BBPS API Failed"
      );
    }
  }

  // BILLER

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
    console.log(payload);
    
    return this.request("/getBillerDetails", payload);
  }

  async billerList(payload) {
    return this.request("/getBillerList", payload);
  }

  // BILL

  async billFetch(payload) {
    return this.request("/BillFetch", payload);
  }

  async billPayment(payload) {
    return this.request("/BillPayment", payload);
  }

  async billValidation(payload) {
    return this.request("/BillValidation", payload);
  }

  // STATUS

  async transactionStatusMobile(payload) {
    return this.request("/TransactionStatusMobile", payload);
  }

  async transactionStatusRefID(payload) {
    return this.request("/TransactionStatusRefID", payload);
  }

  // COMPLAINT

  async raiseComplaint(payload) {
    return this.request("/RaiseComplaint", payload);
  }

  async checkComplaintStatus(payload) {
    return this.request("/CheckComplaintStatus", payload);
  }
}

export default AuBbpsPlugin;
