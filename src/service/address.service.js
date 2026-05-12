    import prisma from "../db/db.js";
    import { ApiError } from "../utils/ApiError.js";

    class AddressService {
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

        return prisma.address.create({
        data: payload,
        });
    }

    // UPDATE
    static async update(id, payload) {
        const exists = await prisma.address.findUnique({
        where: { id },
        });

        if (!exists) {
        throw ApiError.notFound("Address not found");
        }

        return prisma.address.update({
        where: { id },

        data: payload,
        });
    }

    // DELETE
    static async delete(id) {
        const exists = await prisma.address.findUnique({
        where: { id },
        });

        if (!exists) {
        throw ApiError.notFound("Address not found");
        }

        return prisma.address.delete({
        where: { id },
        });
    }
    }

    export default AddressService;
