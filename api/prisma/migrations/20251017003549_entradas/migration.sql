-- CreateTable
CREATE TABLE "public"."Entradas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,

    CONSTRAINT "Entradas_pkey" PRIMARY KEY ("id")
);
