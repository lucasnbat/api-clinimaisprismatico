import prismaClient from "../../prisma"
import {format, toZonedTime} from "date-fns-tz";

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
        if (horario) updateData.horario = horario;
        if (outras_informacoes) updateData.outras_informacoes = outras_informacoes;

        const zonedDateTime = new Date(`${data_consulta}T12:00:00.000Z`);
        // Converta o objeto Date para o fuso horário 'America/Cuiaba'
        const zonedTime = toZonedTime(zonedDateTime, 'America/Cuiaba');
        // Formate a data para o formato UTC antes de salvar no banco
        const dataConsultaUtc = format(zonedTime, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", { timeZone: 'UTC' });

        updateData.data_consulta = new Date(dataConsultaUtc);

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