import CommissionUtils from "../utils/commission.utils.js";

export default class PricingEngine {
  static calculateCommission({
    amount,
    type,
    value,
    providerCost,
    tdsPercent = 0,
  }) {
    const commission = CommissionUtils.calculate(type, value, amount);

    const tdsAmount = (commission * Number(tdsPercent)) / 100;

    return {
      txnAmount: Number(amount),

      commission,

      providerCost: Number(providerCost),

      tdsAmount,

      netCommission: commission - tdsAmount,

      totalDebit: Number(amount),
    };
  }

  static calculateSurcharge({
    amount,
    type,
    value,
    providerCost,
    gstPercent = 0,
  }) {
    const surcharge = CommissionUtils.calculate(type, value, amount);

    const gstAmount = (surcharge * Number(gstPercent)) / 100;

    return {
      txnAmount: Number(amount),

      surcharge,

      providerCost: Number(providerCost),

      gstAmount,

      totalDebit: Number(amount) + surcharge + gstAmount + Number(providerCost),
    };
  }
}
