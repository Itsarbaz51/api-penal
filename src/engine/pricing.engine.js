export default class PricingEngine {
  static calculateCommission({ amount = 0, config }) {
    const txnAmount = amount;

    // ================= COMMISSION =================
    const commission =
      config.type === "PERCENTAGE"
        ? (txnAmount * config.value) / 100
        : config.value || 0;

    // ================= PROVIDER COST =================
    const providerCost =
      config.provider?.type === "PERCENTAGE"
        ? (txnAmount * config.provider.value) / 100
        : config.provider?.value || 0;

    // ================= TAX =================
    const tdsCommission =
      config.tax?.commissionTdsPercent > 0
        ? (commission * config.tax.commissionTdsPercent) / 100
        : 0;

    const tdsProvider =
      config.tax?.providerTdsPercent > 0
        ? (providerCost * config.tax.providerTdsPercent) / 100
        : 0;

    const netCommission = commission - tdsCommission;
    const totalDebit = txnAmount;

    return {
      txnAmount,
      commission,
      netCommission,
      providerCost,

      // TAX
      tdsCommission,
      tdsProvider,
      totalDebit,
    };
  }

  static calculateSurcharge({ amount = 0, config }) {
    const txnAmount = amount;

    const surcharge =
      config.type === "PERCENTAGE"
        ? (txnAmount * config.value) / 100
        : config.value || 0;

    // PROVIDER COST (FROM CONFIG, NOT MAPPING)
    const providerCost =
      config.provider.type === "PERCENTAGE"
        ? (txnAmount * config.provider.value) / 100
        : config.provider.value || 0;

    // TAX CALCULATION (FROM CONFIG.tax)

    // Provider GST (INPUT)
    const gstProvider =
      config.tax?.providerGstPercent > 0
        ? (providerCost * config.tax.providerGstPercent) / 100
        : 0;

    // Surcharge GST (OUTPUT)
    const gstSurcharge =
      config.tax?.surchargeGstPercent > 0
        ? (surcharge * config.tax.surchargeGstPercent) / 100
        : 0;

    // 🔥 FINAL
    const totalDebit =
      txnAmount + surcharge + providerCost + gstProvider + gstSurcharge;

    return {
      txnAmount,
      surcharge,
      providerCost,
      gstProvider,
      gstSurcharge,
      totalDebit,
    };
  }
}
