import prismaClient from "../../prisma";

interface DoctorRequest {
    codigo: string
    cpf: string
    nome: string
    crm: string
    conselho: string
    uf_conselho: string
    especialidade: string
    email: string
    telefone: string
    contato_adicional: string
    ativo?: boolean
}

class CreateDoctorService {
    async execute({
        codigo,
        cpf,
        nome,
        crm,
        conselho,
        uf_conselho,
        especialidade,
        email,
        telefone,
        contato_adicional,
        ativo,
    }: DoctorRequest) {
        const medico = await prismaClient.medico.create({
            data: {
                codigo: codigo,
                cpf: cpf,
                nome: nome,
                crm: crm,
                conselho: conselho,
                uf_conselho: uf_conselho,
                especialidade: especialidade,
                email: email,
                telefone: telefone,
                contato_adicional: contato_adicional,
                ativo: ativo
            }
        });

        return medico;
    }

}

export { CreateDoctorService }