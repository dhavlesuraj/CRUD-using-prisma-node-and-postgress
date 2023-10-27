-- CreateTable
CREATE TABLE "logger1" (
    "id" SERIAL NOT NULL,
    "request" TEXT,
    "response" TEXT,
    "route" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "taken_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "more_data" TEXT,
    "method" TEXT NOT NULL,

    CONSTRAINT "logger1_pkey" PRIMARY KEY ("id")
);
