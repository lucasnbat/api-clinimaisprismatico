ALTER TABLE "paciente"
    ALTER COLUMN "data_nascimento" DROP NOT NULL,
    ALTER COLUMN "endereco" DROP NOT NULL,
    ALTER COLUMN "contato_adicional" DROP NOT NULL,
    ALTER COLUMN "email" DROP NOT NULL,
    ALTER COLUMN "cns" DROP NOT NULL,
    ALTER COLUMN "convenio_id" DROP NOT NULL;
