import TransactionService from "../service/transaction.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export default class TransactionController {
  static async getTransactions(req, res, next) {
    const result = await TransactionService.getTransactions({
      ...req.query,
      actor: req.user,
    });

    return res.json(ApiResponse.success(result));
  }
}
