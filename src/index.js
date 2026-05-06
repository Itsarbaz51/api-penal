import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

import app from "./app.js";
import { envConfig } from "./config/env.config.js";
import prisma from "./db/db.js";
import { setupAuditMiddleware } from "./middleware/auditLog.middleware.js";

const db = setupAuditMiddleware();

(async function main() {
  try {
    await db.$connect();

    console.log("✅ Database connected");

    const PORT = envConfig.PORT || 3000;

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Startup error:", error);

    process.exit(1);
  }
})();
