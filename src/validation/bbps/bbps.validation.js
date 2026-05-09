import { z } from "zod";

const execute = z.object({
  body: z.object({
    provider: z.enum(["AU", "BULKPE", "PAYSPRINT"]),
    method: z.enum([
      "getAllCirclesBiller",
      "getCircleBiller",
      "getBillerPlans",
      "billerDetails",
      "billerList",
      "billFetch",
      "billPayment",
      "billValidation",
      "transactionStatusMobile",
      "transactionStatusRefID",
      "raiseComplaint",
      "checkComplaintStatus",
    ]),
    payload: z.record(z.any()),
  }),
});

const BbpsValidation = {
  execute,
};

export default BbpsValidation;
