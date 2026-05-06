import CryptoService from "../src/utils/crypto.utils.js";
import prisma from "../src/db/db.js";

async function main() {
  console.log("🚀 Starting seed...");

  // =========================
  // ROLES
  // =========================

  const superAdminRole = await prisma.role.upsert({
    where: {
      type: "SUPER_ADMIN",
    },

    update: {},

    create: {
      name: "Super Admin",
      type: "SUPER_ADMIN",
    },
  });

  const apiHolderRole = await prisma.role.upsert({
    where: {
      type: "API_HOLDER",
    },

    update: {},

    create: {
      name: "API Holder",
      type: "API_HOLDER",
    },
  });

  console.log("✅ Roles created");

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
      username: "azzunique",

      fullName: "Azzunique Super Admin",

      profileImage: "",

      email: "admin@azzunique.com",

      phoneNumber: "9999999999",

      password: adminPassword,

      transactionPin: adminPin,

      roleId: superAdminRole.id,

      status: "ACTIVE",

      isKycVerified: true,
    },
  });

  console.log("✅ Super Admin created");

  // =========================
  // BUSINESS DETAIL
  // =========================

  await prisma.businessDetail.upsert({
    where: {
      userId: admin.id,
    },

    update: {},

    create: {
      userId: admin.id,

      businessName: "Azzunique",

      businessType: "Fintech",

      registrationNumber: "AZZ001",

      gstNumber: "08ABCDE1234F1Z5",

      panNumber: "ABCDE1234F",

      addressLine1: "Jaipur Rajasthan",

      city: "Jaipur",

      state: "Rajasthan",

      country: "India",

      postalCode: "302001",

      website: "https://azzunique.com",

      isVerified: true,
    },
  });

  console.log("✅ Business detail added");

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
