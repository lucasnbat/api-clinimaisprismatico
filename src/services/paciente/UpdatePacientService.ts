import prismaClient from "../../prisma";

interface UpdatePacientRequest {
    cpf?: string;
    nome_completo?: string;
    data_nascimento?: string; // ISO-8601 string
    endereco?: string;
    celular?: string;
    contato_adicional?: string;
    convenio_id?: number;
    email?: string;
    cns?: string;
    numero_carteira?: string;
    paciente_id: number;
}

class UpdatePacientService {
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
        numero_carteira,
        paciente_id
    }: UpdatePacientRequest) {
        
        const existingPaciente = await prismaClient.paciente.findUnique({
            where: { id: paciente_id },
        });

        if (!existingPaciente) {
            throw new Error(`Paciente with ID ${paciente_id} not found.`);
        }

        const updateData: any = {};
        if (cpf) updateData.cpf = cpf;
        if (nome_completo) updateData.nome_completo = nome_completo;
        if (data_nascimento) updateData.data_nascimento = new Date(data_nascimento);
        if (endereco) updateData.endereco = endereco;
        if (celular) updateData.celular = celular;
        if (contato_adicional) updateData.contato_adicional = contato_adicional;
        if (convenio_id) updateData.convenio_id = convenio_id;
        if (email) updateData.email = email;
        if (cns) updateData.cns = cns;
        if (numero_carteira) updateData.numero_carteira = numero_carteira;

        const pacienteConst = await prismaClient.paciente.update({
            where: {
                id: paciente_id,
            },
            data: updateData,
        });

        return pacienteConst;
    }
}

export { UpdatePacientService };
