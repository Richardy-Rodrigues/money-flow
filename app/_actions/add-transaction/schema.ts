import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionStatus,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";

export const addTransactionSchema = z.object({
  description: z.string().trim().min(1),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionCategory),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod),
  status: z.nativeEnum(TransactionStatus),
  date: z.date(),
});
