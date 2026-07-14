import crypto from "node:crypto";
import { ApiError } from "./ApiError.js";
import fs from "node:fs";

class HelperUtils {
  static generateUniqueId(prefix = "TXN") {
    // Random 3 digit
    const random = Math.floor(100 + Math.random() * 900);
    return `${prefix}-${random}`;
  }

  static generatePasswordOrPin({ type = "PASSWORD", length }) {
    const configs = {
      PASSWORD: {
        defaultLength: 12,

        charset:
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",

        required: [
          "abcdefghijklmnopqrstuvwxyz",

          "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

          "0123456789",

          "!@#$%^&*",
        ],

        min: 4,
      },

      PIN: {
        defaultLength: 4,

        charset: "0123456789",

        required: ["0123456789"],

        min: 1,
      },
    };

    const config = configs[type];

    if (!config) {
      throw ApiError.internal("Invalid generator type");
    }

    const finalLength = length || config.defaultLength;

    if (finalLength < config.min) {
      throw ApiError.internal(`${type} length must be at least ${config.min}`);
    }

    let result = "";

    // REQUIRED CHARS
    for (const chars of config.required) {
      result += chars.charAt(this.random(chars.length));
    }

    // REMAINING CHARS
    for (let i = result.length; i < finalLength; i++) {
      result += config.charset.charAt(this.random(config.charset.length));
    }

    // SHUFFLE
    const shuffled = result
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

    return shuffled;
  }

  static random(max) {
    return crypto.randomInt(0, max);
  }

  static deleteOldImage(oldImagePath) {
    if (fs.existsSync(oldImagePath)) {
      try {
        fs.unlinkSync(oldImagePath);
        console.log("Local image deleted successfully::", oldImagePath);
      } catch (err) {
        console.log("Error deleting local image:", err.message);
      }
    } else {
      console.log("No local image to delete at:", oldImagePath);
    }
  }
}

export default HelperUtils;
