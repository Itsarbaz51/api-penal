import { z } from "zod";

const billers = z.object({
  category: z.string(),
});

const billerDetails = z.object({
  billerId: z.string().min(3, "billerId required"),
});

const BbpsValidation = {
  billers,
  billerDetails,
};

export default BbpsValidation;
