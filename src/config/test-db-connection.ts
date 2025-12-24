import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Database connection successful");

    // Test query
    const result = await prisma.$queryRaw`SELECT NOW() as current_time`;
    console.log("Current database time:", result);

    await prisma.$disconnect();
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
}

testConnection();
