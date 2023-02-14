/*
  Warnings:

  - Added the required column `city` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dob` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stae` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "dob" TEXT NOT NULL,
ADD COLUMN     "role_id" INTEGER NOT NULL,
ADD COLUMN     "stae" TEXT NOT NULL,
ADD COLUMN     "zip" TEXT NOT NULL,
ALTER COLUMN "token" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "capacity" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "cover_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "skill_level" TEXT NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "trainer_id" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "event_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "dot_number" INTEGER NOT NULL,
    "plate_number" TEXT NOT NULL,
    "company_id" INTEGER NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Waiver" (
    "id" SERIAL NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "Waiver_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_label_key" ON "Role"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_label_key" ON "Vehicle"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Company_label_key" ON "Company"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Waiver_company_id_key" ON "Waiver"("company_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_trainer_id_fkey" FOREIGN KEY ("trainer_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
