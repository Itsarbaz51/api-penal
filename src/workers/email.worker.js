import { Worker } from "bullmq";
import { redis } from "../config/redis.js";
import sendEmail from "../utils/sendEmail.js";
import EmailTemplates from "../templates/email.templates.js";

console.log("Email worker started");

new Worker(
  "emailQueue",

  async (job) => {
    console.log("JOB RECEIVED:", job.name);

    if (job.name === "forgot-password") {
      const template = EmailTemplates.forgotPassword({
        name: job.data.name,

        resetUrl: job.data.resetUrl,
      });

      console.log("Sending email...");

      await sendEmail({
        to: job.data.email,

        subject: template.subject,

        html: template.html,
      });

      console.log("EMAIL SENT SUCCESS");
    }
  },

  {
    connection: redis,
    concurrency: 5,
  }
);
