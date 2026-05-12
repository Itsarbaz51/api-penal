import prisma from "../db/db.js";

import crypto from "node:crypto";

import geoip from "geoip-lite";

const AUDIT_METHODS = ["POST", "PATCH", "PUT", "DELETE"];

export const auditMiddleware = (req, res, next) => {
  // SKIP GET
  if (!AUDIT_METHODS.includes(req.method)) {
    return next();
  }

  const originalJson = res.json.bind(res);

  res.json = async (responseBody) => {
    try {
      const user = req.user || null;

      // IP
      const ipAddress =
        req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
        req.socket.remoteAddress ||
        null;

      // GEO LOCATION
      const geo = geoip.lookup(ipAddress);
      const latitude = geo?.ll?.[0] || null;
      const longitude = geo?.ll?.[1] || null;

      const location = geo
        ? `${geo.city}, ${geo.region}, ${geo.country}`
        : null;

      const domainName = req.hostname || null;
      const userAgent = req.headers["user-agent"] || null;
      const requestId = crypto.randomUUID();

      // ENTITY
      const entityId = responseBody?.data?.id || req.params?.id || null;

      // MODULE
      const module = req.baseUrl?.split("/")?.pop()?.toUpperCase() || null;

      // ACTION
      const action = `${req.method}_${module}`;

      await prisma.auditLog.create({
        data: {
          userId: user?.id,

          roleType: user?.role,

          action,

          module,

          entityType: module,

          entityId,

          requestId,

          method: req.method,

          endpoint: req.originalUrl,

          ipAddress,

          domainName,

          userAgent,

          latitude,

          longitude,

          location,

          status: responseBody?.success ? "SUCCESS" : "FAILED",

          message: responseBody?.message,

          newValues: req.body,

          metadata: {
            params: req.params,

            body: req.body,

            query: req.query,

            statusCode: res.statusCode,
          },
        },
      });
    } catch (error) {
      console.log("Audit log failed", error);
    }

    return originalJson(responseBody);
  };

  next();
};
