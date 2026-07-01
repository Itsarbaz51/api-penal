import { Router } from "express";
import TransactionController from "../controller/transaction.controller.js";
import AuthMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.get(
  "/",
  AuthMiddleware.isAuthenticated,
  TransactionController.getTransactions
);

export default router;
