-- CreateTable
CREATE TABLE "review" (
    "id" TEXT NOT NULL,
    "name" TEXT DEFAULT 'anonymous',
    "message" TEXT NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);
