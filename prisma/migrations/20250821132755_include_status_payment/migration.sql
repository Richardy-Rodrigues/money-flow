/*
  Warnings:

  - Added the required column `status` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."TransactionStatus" AS ENUM ('PENDING', 'COMPLETED', 'CANCELLED');

-- AlterTable
ALTER TABLE "public"."Transaction" ADD COLUMN     "status" "public"."TransactionStatus" NOT NULL;
