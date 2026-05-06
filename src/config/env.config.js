import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export const envConfig = {
  API_BASE_URL: process.env.API_BASE_URL || "http://localhost:3000/api",
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,

  DATABASE_URL: process.env.DATABASE_URL,

  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN || "1d",
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d",
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,

  CRYPTO_SECRET_KEY: process.env.CRYPTO_SECRET_KEY,
};
