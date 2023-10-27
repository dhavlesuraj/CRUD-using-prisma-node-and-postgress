-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "created_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "created_at" DROP DEFAULT;

-- CreateTable
CREATE TABLE "log" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "request" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "taken_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL,
    "more_data" TEXT,

    CONSTRAINT "log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "log" ADD CONSTRAINT "log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
