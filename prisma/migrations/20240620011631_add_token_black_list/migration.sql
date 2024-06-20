-- CreateTable
CREATE TABLE "tokenBlacklist" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tokenBlacklist_pkey" PRIMARY KEY ("id")
);
