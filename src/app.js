import express from "express";
import cors from "cors";
import { responseHandler } from "./middleware/response.middleware.js";
import router from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: true, credentials: true }));

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.use(responseHandler);

app.use("/api", router);

app.get("/health", (req, res) => {
  res.json({ status: "health is ok" });
});

app.use(errorHandler);

export default app;
