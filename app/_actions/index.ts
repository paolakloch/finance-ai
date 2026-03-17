"use server";

import {
  TransactionType,
  Prisma,
  TransactionCategory,
  PaymentMethod,
} from "@prisma/client";
import { db } from "../_lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { addTransactionSchema } from "./schema";

interface AddTransactionParams extends Omit<
  Prisma.TransactionCreateInput,
  "userId"
> {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  date: Date;
  paymentMethod: PaymentMethod;
}

export const addTransaction = async (params: AddTransactionParams) => {
  addTransactionSchema.parse(params);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction.create({
    data: { ...params, userId },
  });

  revalidatePath("/transactions");
};
