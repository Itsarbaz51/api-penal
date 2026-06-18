export default class CommissionUtils {
  static calculate(type, value, amount) {
    const txnAmount = Number(amount);

    if (type === "PERCENTAGE") {
      return (txnAmount * Number(value)) / 100;
    }

    return Number(value || 0);
  }
}
