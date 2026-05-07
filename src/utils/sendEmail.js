import nodemailer from "nodemailer";
import { envConfig } from "../config/env.config.js";
import { ApiError } from "./ApiError.js";

const transporter = nodemailer.createTransport({
  host: envConfig.SMTP_HOST,
  port: Number(envConfig.SMTP_PORT),
  secure: false,
  auth: {
    user: envConfig.SMTP_USER,
    pass: envConfig.SMTP_PASS,
  },
});

const sendEmail = async ({ to, subject, html }) => {
  try {
    console.log("Trying SMTP...");
    const info = await transporter.sendMail({
      from: envConfig.SMTP_USER,

      to,
      subject,
      html,
    });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
    throw ApiError.internal("Failed to send email SMTP");
  }
};
export default sendEmail;
