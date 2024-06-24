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
        const data: any = {
            cpf: cpf,
            nome: nome,
            telefone: telefone
        }

        if (!!crm)
            data.crm = crm;

        if (!!conselho)
            data.conselho = conselho;

        if (!!uf_conselho)
            data.uf_conselho = uf_conselho;

        if (!!especialidade)
            data.especialidade = especialidade;

        if (!!email)
            data.email = email;

        if (!!contato_adicional)
            data.contato_adicional = contato_adicional;

        if (codigo)
            data.codigo = codigo;

        const medico = await prismaClient.medico.create({
            data
        });

        return medico;
    }

}

export { CreateDoctorService }