import prismaClient from "../../prisma"

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
    medico_id: number
}

class UpdateDoctorService {
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
        medico_id,
    }: DoctorRequest) {

        const updateData: any = {};
        if (codigo) updateData.codigo = codigo;
        if (cpf) updateData.cpf = cpf;
        if (nome) updateData.nome = nome;
        if (crm) updateData.crm = crm;
        if (conselho) updateData.conselho = conselho;
        if (uf_conselho) updateData.uf_conselho = uf_conselho;
        if (especialidade) updateData.especialidade = especialidade;
        if (telefone) updateData.telefone = telefone;
        if (contato_adicional) updateData.contato_adicional = contato_adicional;
        if (ativo) updateData.ativo = ativo;
        if (email) updateData.email = email;


        const medico = await prismaClient.medico.update({
            where: {
                id: medico_id,
            },
            data: updateData,
        });

        return medico;
    }
}

export { UpdateDoctorService }