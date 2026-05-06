import prisma from "../db/db.js";

export const setupAuditMiddleware = () => {
  return prisma.$extends({
    query: {
      async $allOperations({ model, operation, args, query }) {
        const result = await query(args);

        try {
          const allowedOperations = ["create", "update", "delete"];

          if (model && allowedOperations.includes(operation)) {
            await prisma.auditLog.create({
              data: {
                action: operation.toUpperCase(),

                entityType: model,

                entityId: result?.id || args?.where?.id || null,

                metadata: {
                  operation,
                  model,
                },
              },
            });
          }
        } catch (error) {
          console.log("Audit log failed");
        }

        return result;
      },
    },
  });
};
