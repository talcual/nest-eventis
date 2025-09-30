/*
  Warnings:

  - Added the required column `passwd_s` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "passwd_s" TEXT NOT NULL;
