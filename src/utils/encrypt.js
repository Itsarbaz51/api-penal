import crypto from "crypto";

const rawKey = "";
const rawIv = "";

const key = Buffer.from(rawKey, "base64");
const iv = Buffer.from(rawIv, "base64");

const payload = {
  RequestId: "098u090988",

  OriginatingChannel: "CRM",

  Header: {
    Ver: 1.0,
    OrigInst: "AU01",
    RefId: "ABCDE12345ABCDE12345ABCDE12345",
    TimeStamp: new Date().toISOString().replace("Z", "+05:30"),
  },

  ReferenceNumber: "90999999",

  Search: {
    Category: "",
    LastUpdated: "2025-01-01",
  },

  ReportingParam: {
    MISClass: "TEST",
    MISCode: "TEST",
  },

  TransactionBranch: 1090,
};

const cipher = crypto.createCipheriv("aes-128-gcm", key, iv);

const encrypted = Buffer.concat([
  cipher.update(JSON.stringify(payload), "utf8"),
  cipher.final(),
]);

const authTag = cipher.getAuthTag();

// TRY THIS FORMAT
const finalBuffer = Buffer.concat([iv, encrypted, authTag]);

const finalEncrypted = finalBuffer.toString("base64");

console.log(finalEncrypted);
