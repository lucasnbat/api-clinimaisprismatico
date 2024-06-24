/*
  Warnings:

  - Made the column `data_nascimento` on table `paciente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `endereco` on table `paciente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contato_adicional` on table `paciente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `paciente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cns` on table `paciente` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "paciente" DROP CONSTRAINT "paciente_convenio_id_fkey";

-- AlterTable
ALTER TABLE "paciente" ALTER COLUMN "data_nascimento" SET NOT NULL,
ALTER COLUMN "endereco" SET NOT NULL,
ALTER COLUMN "contato_adicional" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "cns" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "paciente" ADD CONSTRAINT "paciente_convenio_id_fkey" FOREIGN KEY ("convenio_id") REFERENCES "convenio"("id") ON DELETE SET NULL ON UPDATE CASCADE;
