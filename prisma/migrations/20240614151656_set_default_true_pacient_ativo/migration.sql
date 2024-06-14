-- AlterTable
ALTER TABLE "paciente" ALTER COLUMN "ativo" SET DEFAULT true;

-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "root" SET DEFAULT false,
ALTER COLUMN "ativo" SET DEFAULT true;
