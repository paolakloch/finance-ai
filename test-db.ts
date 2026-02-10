// test-db.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // This tries to connect and perform a simple query
    await prisma.$connect();
    console.log("✅ Connection successful: Your app is talking to Docker!");

    // Optional: Count users or a table you have
    // const count = await prisma.user.count()
    // console.log(`Total users in Docker DB: ${count}`)
  } catch (e) {
    console.error("❌ Connection failed!");
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
