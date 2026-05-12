import prisma from "../db/db.js";

import { ApiError } from "../utils/ApiError.js";

class KycDocumentService {
  // CREATE
  static async create(payload) {
    const kycExists = await prisma.kyc.findUnique({
      where: {
        id: payload.kycId,
      },
    });

    if (!kycExists) {
      throw ApiError.badRequest("KYC not found");
    }

    return prisma.kycDocument.create({
      data: payload,
    });
  }

  // UPDATE
  static async update(id, payload) {
    const exists = await prisma.kycDocument.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Document not found");
    }

    return prisma.kycDocument.update({
      where: { id },

      data: payload,
    });
  }

  

  // DELETE
  static async delete(id) {
    const exists = await prisma.kycDocument.findUnique({
      where: { id },
    });

    if (!exists) {
      throw ApiError.notFound("Document not found");
    }

    return prisma.kycDocument.delete({
      where: { id },
    });
  }
}

export default KycDocumentService;
