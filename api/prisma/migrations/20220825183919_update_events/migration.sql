/*
  Warnings:

  - Added the required column `title` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Vehicle_label_key";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "title" TEXT NOT NULL;
