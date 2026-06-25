import axios from "axios";
import AadhaarPluginInterface from "./aadhaar.interface.js";
import { ApiError } from "../../utils/ApiError.js";

class BulkpeAadhaarPlugin extends AadhaarPluginInterface {
  constructor(config) {
    super(config);

    this.client = axios.create({
      baseURL: this.config.bulkpeBaseUrl,
      timeout: 15000,
      headers: {
        Authorization: `Bearer ${this.config.apiKey}`,
        "Content-Type": "application/json",
      },
    });
  }

  // STEP 1: SEND OTP
  async sendOtp({ aadhaarNumber }) {
    try {
      const response = await this.client.post("/verifyAadhar", {
        aadhaar: aadhaarNumber,
      });

      if (!response.data.status) {
        throw ApiError.badRequest(
          response.data.message || "Failed to send OTP"
        );
      }

      return response?.data;
    } catch (err) {
      throw ApiError.internal(err);
    }
  }

  // STEP 2: VERIFY OTP
  async verifyOtp({ referenceId, otp }) {
    console.log(
      "Verifying OTP with referenceId:",
      referenceId,
      "and otp:",
      otp
    );

    const response = await this.client.post("/verifyAadharOtp", {
      ref_id: referenceId,
      otp,
    });

    console.log(response);
    if (!response.data.status) {
      throw ApiError.badRequest(response.data.message);
    }

    return response.data;
  }
}

export default BulkpeAadhaarPlugin;
