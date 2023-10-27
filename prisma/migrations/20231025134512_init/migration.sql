/*
  Warnings:

  - Added the required column `method` to the `log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "log" ADD COLUMN     "method" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "logger" (
    "id" SERIAL NOT NULL,
    "request" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "taken_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "more_data" TEXT,
    "method" TEXT NOT NULL,

    CONSTRAINT "logger_pkey" PRIMARY KEY ("id")
);
