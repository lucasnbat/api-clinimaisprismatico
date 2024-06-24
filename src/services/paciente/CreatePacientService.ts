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
    data_nascimento: Date;
    endereco: string;
    celular: string;
    contato_adicional: string;
    convenio_id: number;
    email: string;
    cns: string;
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
        const paciente = await prismaClient.paciente.create({
            data: {
                cpf: cpf,
                nome_completo: nome_completo,
                data_nascimento: data_nascimento,
                endereco: endereco,
                celular: celular,
                contato_adicional: contato_adicional,
                convenio_id: convenio_id,
                email: email,
                cns: cns,
                numero_carteira: numero_carteira,
                ativo: true,
            }
        });

        return paciente;
    }
}

export { CreatePacientService }