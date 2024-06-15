import prismaClient from "../../prisma"

interface ConsultaRequest {
    medico_id: number,
    paciente_id: number,
    data_consulta: Date,
    horario: string,
    outras_informacoes: string,
    is_cancelada?: boolean,
    consulta_id: number,
}

class UpdateConsultaService {
    async execute({
        medico_id,
        paciente_id,
        data_consulta,
        horario,
        outras_informacoes,
        consulta_id,
    }: ConsultaRequest) {

        const updateData: any = {};
        if (medico_id) updateData.medico_id = medico_id;
        if (paciente_id) updateData.paciente_id = paciente_id;
        if (data_consulta) updateData.data_consulta = data_consulta;
        if (horario) updateData.horario = horario;
        if (outras_informacoes) updateData.outras_informacoes = outras_informacoes;

        const consulta = await prismaClient.consultas.update({
            where: {
                id: consulta_id,
            },
            data: updateData,
        });

        return consulta;
    }
}

export { UpdateConsultaService }