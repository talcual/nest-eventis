-- CreateTable
CREATE TABLE "public"."Participante" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_evento" INTEGER NOT NULL,

    CONSTRAINT "Participante_pkey" PRIMARY KEY ("id")
);
