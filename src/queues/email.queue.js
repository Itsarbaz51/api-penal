import { Queue, QueueEvents } from "bullmq";

import { redis } from "../config/redis.js";

export const emailQueue = new Queue("emailQueue", {
  connection: redis,
});

export const queueEvents = new QueueEvents("emailQueue", {
  connection: redis,
});

queueEvents.on("completed", ({ jobId }) => {
  console.log(`Job ${jobId} completed`);
});

queueEvents.on("failed", ({ jobId, failedReason }) => {
  console.log(jobId, failedReason);
});
