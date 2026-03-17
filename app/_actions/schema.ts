import {
  PaymentMethod,
  TransactionCategory,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";

export const addTransactionSchema = z.object({
  name: z.string().min(1),
  amount: z.string().trim().min(1),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionCategory),
  date: z.date(),
  paymentMethod: z.nativeEnum(PaymentMethod),
});
