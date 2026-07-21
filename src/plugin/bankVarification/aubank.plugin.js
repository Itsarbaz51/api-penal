import axios from "axios";
import BankVerificationPluginInterface from "./bankVerification.interface.js";
import { ApiError } from "../../utils/ApiError.js";

class AuBankPlugin extends BankVerificationPluginInterface {
  constructor(config) {
    super(config);

    this.client = axios.create({
      baseURL: this.config.baseUrl,
      timeout: 30000,
      headers: {
        Authorization: `Bearer ${this.config.accessToken}`,
        "Content-Type": "application/json",
      },
    });
  }

  async pennyDrop({
    remitterAccountNo,
    requestId,
    referenceNumber,
    beneficiaryAccountNo,
    beneficiaryIfscCode,
    transactionBranch,
    originatingChannel = "CIB",
  }) {
    const payload = {
      RemitterAccountNo: remitterAccountNo,
      RequestId: requestId,
      OriginatingChannel: originatingChannel,
      ReferenceNumber: referenceNumber,
      BeneficiaryAccountNo: beneficiaryAccountNo,
      TransactionBranch: transactionBranch,
      BeneficiaryIFSCCode: beneficiaryIfscCode,
    };

    const response = await this.client.post(
      "/cbs/IMPSPennyDropService/pennydrop",
      payload
    );
    
    // return response;
    return response;
  }

  async pennyLess({ requestId, beneficiaryAccountNo, beneficiaryIfscCode }) {
    const payload = {
      RequestId: requestId,
      BeneficiaryAccountNo: beneficiaryAccountNo,
      BeneficiaryIFSCCode: beneficiaryIfscCode,
    };

    const response = await this.client.post(
      "/cbs/PennyLessService/pennyless",
      payload
    );
    return response;
  }
}

export default AuBankPlugin;
