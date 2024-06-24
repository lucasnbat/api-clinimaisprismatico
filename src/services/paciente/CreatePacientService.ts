import prismaClient from "../../prisma";

// cpf               String
// nome_completo     String
// data_nascimento   DateTime
// endereco          String
// celular           String
// contato_adicional String
// convenio_id       Int
// email             String
// cns               Int
// numero_carteira   Int
// ativo             Boolean

interface RequestUser {
    cpf: string;
    nome_completo: string;
    data_nascimento?: Date;
    endereco?: string;
    celular: string;
    contato_adicional?: string;
    convenio_id?: number | null; // Permitir null explicitamente
    email?: string;
    cns?: string;
    numero_carteira: string;
}

class CreatePacientService {
    async execute({
                      cpf,
                      nome_completo,
                      data_nascimento,
                      endereco,
                      celular,
                      contato_adicional,
                      convenio_id,
                      email,
                      cns,
                      numero_carteira }: RequestUser) {

        const data = {
            cpf,
            nome_completo,
            celular,
            numero_carteira,
            ativo: true,
            data_nascimento: null, // Exemplo de valor padrão para data_nascimento
            endereco: endereco ?? '',
            contato_adicional: contato_adicional ?? '',
            email: email ?? '',
            cns: cns ?? '',
            convenio: {}
        };

        if (!!data_nascimento) {
            const zonedDateTime = new Date(`${data_nascimento}T12:00:00.000Z`);
            data.data_nascimento = zonedDateTime;
        }

        if (!!convenio_id)
            data.convenio = {
                connect: { id: convenio_id }
            };

        const paciente = await prismaClient.paciente.create({
            data
        });

        return paciente;
    }
}

export { CreatePacientService };