import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient | undefined;
}

function getPrisma(): PrismaClient {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  }
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  return global.cachedPrisma;
}

// Lazy init: no DB connection until first use (avoids build-time failures on Vercel)
export const db = new Proxy({} as PrismaClient, {
  get(_, prop) {
    return getPrisma()[prop as keyof PrismaClient];
  },
});
