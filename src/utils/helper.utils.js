class HelperUtils {
  static generateUniqueId(prefix = "TXN") {
    const now = new Date();

    // DATE → YYYYMMDD
    const date = now.toLocaleDateString("en-CA").replace(/-/g, "");

    // TIME → HHMMSS (24-hour format)
    const time = now
      .toLocaleTimeString("en-GB", { hour12: false })
      .replace(/:/g, "");

    // Random 3 digit
    const random = Math.floor(100 + Math.random() * 900);

    const ms = now.getMilliseconds().toString().padStart(3, "0");
    return `${prefix}-${date}-${time}${ms}-${random}`;
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
}

export default HelperUtils;
