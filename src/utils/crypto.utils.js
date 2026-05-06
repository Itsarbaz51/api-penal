import crypto from "crypto";
import { ApiError } from "./ApiError.js";
import { envConfig } from "../config/env.config.js";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 16; // 128 bits
const KEY_LENGTH = 32; // 256 bits
const secretKey = envConfig.CRYPTO_SECRET_KEY;

if (!secretKey || secretKey.length !== 64) {
  console.warn(
    "Using temporary secret key for development. Set CRYPTO_SECRET_KEY in .env for production."
  );
}

export default class CryptoService {
  static encrypt(text) {
    try {
      if (!text) return text;

      if (!secretKey || Buffer.from(secretKey, "hex").length !== KEY_LENGTH) {
        throw ApiError.internal(
          "Invalid encryption key length. Must be 32 bytes (64 hex chars)."
        );
      }

      const iv = crypto.randomBytes(IV_LENGTH);
      const cipher = crypto.createCipheriv(
        ALGORITHM,
        Buffer.from(secretKey, "hex"),
        iv
      );

      let encrypted = cipher.update(text, "utf8", "hex");
      encrypted += cipher.final("hex");

      const authTag = cipher.getAuthTag();

      return `${iv.toString("hex")}:${encrypted}:${authTag.toString("hex")}`;
    } catch (error) {
      console.error("Encryption failed:", error);
      throw ApiError.internal("Encryption failed");
    }
  }

  static decrypt(encryptedText) {
    try {
      if (!encryptedText) return encryptedText;

      const parts = encryptedText.split(":");
      if (parts.length !== 3) {
        throw ApiError.internal("Invalid encrypted text format");
      }

      const [ivHex, encrypted, authTagHex] = parts;
      const iv = Buffer.from(ivHex, "hex");
      const authTag = Buffer.from(authTagHex, "hex");

      if (!secretKey || Buffer.from(secretKey, "hex").length !== KEY_LENGTH) {
        throw ApiError.internal(
          "Invalid encryption key length. Must be 32 bytes (64 hex chars)."
        );
      }

      const decipher = crypto.createDecipheriv(
        ALGORITHM,
        Buffer.from(secretKey, "hex"),
        iv
      );
      decipher.setAuthTag(authTag);

      let decrypted = decipher.update(encrypted, "hex", "utf8");
      decrypted += decipher.final("utf8");

      return decrypted;
    } catch (error) {
      console.error("Decryption failed:", error);
      throw ApiError.internal("Decryption failed");
    }
  }
}
