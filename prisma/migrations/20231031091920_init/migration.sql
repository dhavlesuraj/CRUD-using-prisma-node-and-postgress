-- CreateTable
CREATE TABLE "logger2" (
    "id" SERIAL NOT NULL,
    "request" TEXT,
    "response" TEXT,
    "route" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "taken_time" TIMESTAMP(3) NOT NULL,
    "more_data" TEXT,
    "method" TEXT,

    CONSTRAINT "logger2_pkey" PRIMARY KEY ("id")
);
