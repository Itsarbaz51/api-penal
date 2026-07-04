import prisma from "../../db/db.js";
import SettlementEngine from "../../engine/settlement.engine.js";
import getAadhaarPlugin from "../../plugin_registry/aadhaar/pluginRegistry.js";
import { ApiError } from "../../utils/ApiError.js";
import CryptoService from "../../utils/crypto.utils.js";
import crypto from "node:crypto";
import HelperUtils from "../../utils/helper.utils.js";

export default class BulkpeAadhaarService {
  // send OTP
  static async sendOtp(payload, actor, serviceProvider) {
    const { aadhaarNumber } = payload;
    if (!aadhaarNumber) {
      throw ApiError.badRequest("AADHAAR number is required");
    }

    // PROVIDER API
    const plugin = getAadhaarPlugin(
      serviceProvider.provider.code,
      serviceProvider.config
    );

    const response = await plugin.sendOtp(payload);

    return response;
  }

  static async OtpVerify(payload, actor, serviceProvider) {
    const plugin = getAadhaarPlugin(
      serviceProvider.provider.code,
      serviceProvider.config
    );

    const config = serviceProvider.config || {};

    return prisma.$transaction(async (tx) => {
      const txnId = HelperUtils.generateUniqueId("AADHAAR");

      const { transaction, wallet, pricing, isDuplicate } =
        await SettlementEngine.execute({
          tx,
          actor,
          payload: {
            ...payload,
            txnId,
          },
          serviceProvider,
          paymentMethod: "AADHAAR_OTP",
        });

      if (isDuplicate) {
        return {
          transactionId: transaction.id,
          status: transaction.status,
        };
      }

      try {
        // const response = await plugin.verifyOtp(payload);
        const response = {
          status: true,
          statusCode: 200,
          data: {
            ref_id: "79684048",
            status: "VALID",
            care_of: "S/O: Irfan Akhtar",
            address:
              "ward no 2, ramner road, madanganj kishangarh, Madanganj Kishangarh, Kishangarh, Ajmer, Kishangarh, Rajasthan, India, 305801",
            dob: "25-01-2003",
            email: "",
            gender: "M",
            name: "Samir Akhtar",
            split_address: {
              country: "India",
              dist: "Ajmer",
              house: "ward no 2",
              landmark: "madanganj kishangarh",
              pincode: "305801",
              po: "Madanganj Kishangarh",
              state: "Rajasthan",
              street: "ramner road",
              subdist: "Kishangarh",
              vtc: "Kishangarh",
              locality: "",
            },
            year_of_birth: "2003",
            mobile_hash:
              "430a85be604bed8cd8eb10c71ac70d5d3dd270612382430c38f76e5049298a61",
            photo_link:
              "data:image/png;base64,data:image/png;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADIAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0QGlzShKdsoJGg04GnBOKXZQA0GlpwSl2UAMoNSeXRsoAjFKeBT9lBTigCB6YOD6VMy8UmzigBnekzzUm2jZQA00w1Ps4phSgCKkNTBKbs60wGU1jUoSmsnNAE4pc0gWlCGkAoIpwoCcUu2gAFLQBS4oAM0dqMUYpAFFGKKYEbnimZpZMDqaj3rnrQBIKUEU0e1KBzQA/tTTwKdtprLQA2kHU0uKAtABTT1p+DTWXBoAmApwAqNc0+gY4AUuBSUUAKAKXim5qpqOow6ZZvc3DYReB6k+gpAW3dI0Z3YKqjJYnAA9awrjxfpFvP5Tzk4OCyrkfXjtXnev+J7zVrl185lt93yRA4UDtn1PvWCZHc5JzQFj3Gw1zTdTZls7pJGUZK4KnHrg4yPen3moRWsZZmGfSvCVu5YZQ0bsjKeCDgirX9talIQTcTSAf3mLfzoCx6Tea1JMx2HAqoupzKc7q4ptdutmMIDVb+3L1z/rQPwFAz0yDW2UANWhBrUbfeOK8jXXb5XH7wED/AGRXQaXqn21GVhiReuOh+lArHoL61AOAab/bUJOM1yQYmjcc9aAsdxb3cU4+UirQAxXF2Fw6TqAeDXYQuXjB9qYEoApHAoTrSSZoEPC0/bTAc04E0DH7RRtozRmgCpqN2mn2M11JysSk49T2H5147rOs3mqTmS5mZhk7Uz8qD0A7V6j4uy3hu7QEZIBwe+CCf0BrxtzufmkMZty24jg1HLMO2PSnSS5XaKYltJNyqkipbAg5Ztx704k42g4FXhpk+3IQ0jafME+709KXOh2ZQOTSdyav/wBmzMPSoZbO4i5ZMj2o50HKyqSM1f029NpN5gHXjHrWe5G7DArQv3+uaoR6Hby+fCsm0ruGcGpqwNG1Uy4tpj84Hyt61tBqALMTbXBBrsNNmR4AN2TXEh8VpadeNFKOeDTA7QDnNK6jFQwy741NTZ4piALT1XmkBBqReaQw29qCtSIAR70OMUAcl42klXRXhQfK5HPrg5/z/nPlEqASfzr2jxFEkmmymRAyqM57g+o968duz+/JAABPakwG2tkLiYDBCjrXQQ2UaqAqgVV0hB5ecVtKVArnqS1NoR0K4t8ig24x3q2XBXgU3ORWF2bqKKb24xVaWBSuCK0m6e1VZCADTTFKKOev9PR1LKMGsRgYjg11s2DmsHUYFDbhxXRCRzziQW0rRzJIvVTmu3gfzI1PciuCiysg5zXbWBYWkZbqRWxmXQOav6fD5s6is8NWlpbE3S/WmB2EMexFHtU4HNIoxGKUMOKYCgVKBTR9Klj5IpAPiUk9CfpTpVAFSR/KeGA47USD5Rx2oEZt1bLc28kZ4LqV3emRivFtYsJNP1Ka2lHzRtj6jsfyr3MjGa8z8Z2q/wDCUx4X/Wxoze/JH9BSewzK05RHbAsNua0IQjEMzAA+pqA2xkJJbbGOABUT6fAUJNzICOncVyys3qdCukbsS2sigCaPce24Uktgy8447VgW9kFfcs5kx2NdPY3xa2aKT5iEwp9KykktjWMm9ym1sAhZuAO5qnNHCyEhh9aTUb0zL5IJHPOKxn06WRiVn2E9yeacY+YpStoLcBUbhx+dZOoITHvHarj6YQSWudx+lReTICY5cMpHBraNrmMr2Meyjaa9hQDq3P0rto12KAO1c3ott/xM2z0izz79K6dSK6EYj1Fa2jR7rpfrWUK3fD4H2pc00B16pmPPoKhbINXHGzHPBFVW9KAJFqZM5FNC1PboGcAnFAEkYPFK+cAnvkVPbKFm+bv6UyZSCgI6jgYpiKbZzXnniESzeJQZG3BMqvHAUDP8zXo8y7WI64rz/VXWTxBKR2LqQfYgf0NZ1HZFwWpk3cMrptj+X3xVC70oXEULI8sUiDEnzbg/v9fb6V1McCkZ6mhoFz91c1yKdjq9ncwGt7WPyzbJOpRQGZyMMe5xnip4DL5bMM1fuLdduTyaIoiID8uPSlKVyow5TmN7HUgHztJ7VavrPfpRaCaWK8VwSWYbSMdBjn8/zqtMMXpDDndWyLffGM88cHvV81jNx5jl5Ld4bRD57STk5I52genPepIS7oN64IrfawjIy2T9TVC4iWNsLTUrsmULIy9MlEV9coQdzvgYHpmttSawLQqdXLA9HbP5Gt4OvrXRFmDRIDW3oTEXa/WsRSK3/D8e66Uj1qhHaygiND6iqbE7q0ZFX7Kn94Egn+VUWAzTAnVqswNhgfSqwFWYB8woAv24I8suc7s59qiUmW5AfIyauW0a/Z1Y9eaqyDbcE4yoyOPypiKjHJY9BXnOqxtFrUznPMr5H1OR/OvRnUqzKcHB6iue8QaVFJbTXo8zzlCnCkYPIGT+H8qzmrouLszAimwKvW0YuXAGB6mshDxUy3otUZmbaMYrha1O6L0LOqtawkIG+VOWb+8fSoU1SzbTmk2kE9Cflxj1BFY11qEk+PIjJJ7tVVmvXgbzoQT/AAtxiqUSXPsRXYFy7XEDjg5BratJPNsIpiNu5ehrmklu1kPnJlM8gdK1IdRSSIqrYx/DTktBRkrlq4nx3rGurj7zZ6CrE8uQaz5cuCOD9adNakVJFXT1JmMpHXNaqsap2ibI/mGGPUVbUc10xOeRYjfJrsPDEfIc1yFvGXkVa77RIfIhjJHvVok6KRv9DUf7ZP6Cs52+arrHMRUAY3HmqLjDHFMC2GqzbkFwKpgVZt/vr9aANuNwsYGOhxxVOaTYvl98nNWIH3oBtxknPPtVC4A8wnt7dqBDDy/Pfmq1wgmglhY4V1KkjrzxT34PHIqNixzxQM88mDQzPG/DKxU89xUM67wO57Vs+K7eOGaK5EiLLLwYy3zNj+ID8gfw9a5+NyRwea46keV3OmErqwxIP3hWWTjtgVZey44lG0+/WmeSZuGJGe9I+lL5TuLmbI6DtUqRqtOhm3cawthJAT3qBYgvzDqealktxGfvFj71BJJtU5NDkQ9xJJe2ajDAiqkk+Dgnk9quBfkH0raETCbFU4NWVOTVUBs1o6dB586J71tYzNjRbFppQ5HArs4MIAB2qlZWq20KqBzirigiqAvI+5TzUEhG40sRPNMmHJoAtA1PD98c45qoDU8DlXU5xg5oA1lZVWE5z9Oxxz/OqjyBgQfQD9KEl2SA9u1V5G6n15o80SOJ7flUE8yQQySyMFjjUszHsByTUNzewWcRmuZkhiHVnbA+n1rznxh4yh1O3/s/T9xtiwMsjDHmYOQAPTvzznHTHIUZ+pa/JrXiXzcssAUrFG38Kfh3PU9fTOAKm3tCdygsvcelctpjltWBz0U11SfOh7Guaq9TansPGoJgc9P0qQ6w/KAjbjFUGiVyQ6gnv2NMks7dYS3mSBvTPSslY01Irm7UMTnise5vzI+yFSxq1LbIc5yf945otYQMnAA/nVJpEu7KUVtKT5sxx9avWl0LiM46qcMKbfSiKFm7AVzsF3LbOXjbk9QehrWm29TOorHXB609GnWO9QsQBnvXMWuqRzYWX923v0rSRscg1sZnq0UiugKkEVMGGK84sdaubRgA5K+hrqbDxBBdAK52N70wOhjbmnSnk1USUHBU5HtT3YmgC2CM1NERVF51jRndgqqCWZjgADqSa5fV/iBbWQaLT1FxKOPMbIQc/m3f0HQ5NMR21xd29pbtNcyLFGo+Z3bAH/664bWviFHHui0qMOennyggfgvX064+lcHqniC+1Wbzby5eZh0BOAvAHA6DoOlZTTk8k0gRp6jq11qM7TXdw8snqx4HsB0A9hWa75qEyE03eaBl7SSDqZ/3P8K66IDbXDWMyw6pAzHCltpOcdeK7JHKcVzVdzelsT/KXw35imSwR/8APQ/Sm78n3okYFM8Vgaso3IReF5pIl+XJpJSuajkn2JQQZ2tSjywg7msBjgGrd9c+fOeeBxVFm+bFddNWiYzd2WFYEA/rV60v5bfAzuT+6f6VmK2EX6U7eRyOlaEHVW15Fcj5Thu6nrVyOQqeCQa45JipBBII6EGtW21cjCzcj+8KAO207XZrUhWbcnoa6uz1S2vYxtYBvQ15pFcLKoZGBHqKtQ3TwuGRiCPSi4FHWPEt9qz4mk2xA5WJOFBx+v4+prCeQknPWozJzTGemA8vmmmomY0iy5OKAJaKZu5pd3FADJByK7HRLg6jpyluZYzsbnk+hrjnPStbwzf/AGPUxExxHP8AKf8Ae7f596xqq6NKbszqfIPY81FJFJ3FaroDziozGD3rkudPKYrQEfMegrJ1FzHAzZ5J2rXT3EeV2Dv1rj9dnD33kqflhG3j17/4fhWlNXZnPRGURVduGY+1TM9VpWwGPtXWcxOvKinkZqJW+RT7VIGFMAApwyOhqMvnpTgfzoAtQXLwtuRipratdTjlwsuEf17GubzinCTHegB7N0pM0UUwEqJwQciiigB6tuGRTs0UUAIzDuaQEqQc96KKlgelaXdG90yCfPzMvOR3HB/WrLLgUUVwy3O2Oxn6neLYWclwwyfuoD3NebX9y7szFiZJG3E0UV0UVpc56z1sRxlyg3nmmT58s4oorYyJIm/dL9KcWz0oopgKtOoooACcDmjpyetFFAH/2Q==",
            share_code: "2345",
            xml_file: "",
          },
          message: "",
        };

        // SUCCESS
        if (
          response?.status === true &&
          response?.statusCode === 200 &&
          response?.data?.status === "VALID"
        ) {
          await SettlementEngine.success({
            tx,
            actor,
            transaction,
            wallet,
            serviceProvider,
            service: serviceProvider.service,
            provider: serviceProvider.provider,
            providerReference: response.data.ref_id,
            providerResponse: response,
          });

          return {
            transactionId: transaction.id,
            providerReference: response.data.ref_id,
            status: "SUCCESS",
            data: response.data,
          };
        }

        // FAILED
        await SettlementEngine.failed({
          tx,
          transaction,
          wallet,
          pricing,
          providerReference: response?.data?.ref_id,
          providerResponse: response,
        });

        throw ApiError.badRequest(
          response?.message ||
            response?.data?.status ||
            "Aadhaar verification failed"
        );
      } catch (error) {
        await SettlementEngine.failed({
          tx,
          transaction,
          wallet,
          pricing,
          providerResponse: error,
        });
        throw error;
      }
    });
  }
}
