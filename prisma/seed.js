import CryptoService from "../src/utils/crypto.utils.js";
import prisma from "../src/db/db.js";

async function main() {
  console.log("🚀 Starting seed...");


  // =========================
  // SUPER ADMIN
  // =========================

  const adminPassword = CryptoService.encrypt("Admin@123");
  const adminPin = CryptoService.encrypt("1234");

  const admin = await prisma.user.upsert({
    where: {
      email: "admin@azzunique.com",
    },

    update: {},

    create: {
      registrationNumber: "AZZ8795",
      companyName: "Azzunique",
      companyType: "PRIVATE_LIMITED",

      fullName: "Super Admin",
      profileImage: "",
      email: "admin@azzunique.com",
      phoneNumber: "9999999999",
      password: adminPassword,
      transactionPin: adminPin,
      role: "SUPER_ADMIN",
      status: "ACTIVE",
      isKycVerified: true,
    },
  });

  console.log("✅ Super Admin created");

  // =========================
  // WALLETS
  // =========================

  const walletTypes = ["COMMISSION", "GST", "TDS"];

  for (const walletType of walletTypes) {
    await prisma.wallet.upsert({
      where: {
        userId_walletType: {
          userId: admin.id,
          walletType,
        },
      },

      update: {},

      create: {
        userId: admin.id,

        walletType,

        balance: BigInt(0),

        holdBalance: BigInt(0),
      },
    });
  }

  console.log("✅ Wallets created");

  console.log("\n🎉 Seeding completed successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
    process.exit(0);
  })

  .catch(async (err) => {
    console.error("❌ Seeding failed:", err);

    await prisma.$disconnect();

    process.exit(1);
  });
