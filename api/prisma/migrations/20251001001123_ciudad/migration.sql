-- CreateTable
CREATE TABLE "public"."Ciudad" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ciudad_pkey" PRIMARY KEY ("id")
);
