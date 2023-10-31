-- CreateTable
CREATE TABLE "logger3" (
    "id" SERIAL NOT NULL,
    "request" TEXT,
    "response" TEXT,
    "route" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "taken_time" DOUBLE PRECISION NOT NULL,
    "more_data" TEXT,
    "method" TEXT,

    CONSTRAINT "logger3_pkey" PRIMARY KEY ("id")
);
