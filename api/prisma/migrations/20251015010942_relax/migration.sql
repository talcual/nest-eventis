-- AlterTable
ALTER TABLE "public"."Evento" ADD COLUMN     "ciudad_id" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "public"."Evento" ADD CONSTRAINT "Evento_ciudad_id_fkey" FOREIGN KEY ("ciudad_id") REFERENCES "public"."Ciudad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
