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

        forgotUrl: job.data.forgotUrl,
      });

      console.log("Sending email...");

      await sendEmail({
        to: job.data.email,

        subject: template.subject,

        html: template.html,
      });

      console.log("EMAIL SENT SUCCESS");
    }

    if (job.name === "welcome") {
      const template = EmailTemplates.welcome({
        name: job.data.name,
        companyName: job.data.companyName,
        registrationNumber: job.data.registrationNumber,
        email: job.data.email,
        password: job.data.password,
      });

      await sendEmail({
        to: job.data.email,
        subject: template.subject,
        html: template.html,
      });
    }
  },

  {
    connection: redis,
    concurrency: 5,
  }
);
