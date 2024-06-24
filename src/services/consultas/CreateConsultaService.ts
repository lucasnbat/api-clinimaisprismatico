import prismaClient from "../../prisma";
import { format, toZonedTime } from 'date-fns-tz';

interface ConsultaRequest {
    medico_id: number,
    paciente_id: number,
    data_consulta: string, // DateTime --> string
    horario: string,
    outras_informacoes: string,
    is_cancelada?: boolean,
}

class CreateConsultaService {
    async execute({
        medico_id,
        paciente_id,
        data_consulta,
        horario,
        outras_informacoes,
    }: ConsultaRequest) {

        const data: any = {
            horario: horario
        }
        // Combine data e horário para criar um objeto Date
        const zonedDateTime = new Date(`${data_consulta}T12:00:00.000Z`);
        // Converta o objeto Date para o fuso horário 'America/Cuiaba'
        const zonedTime = toZonedTime(zonedDateTime, 'America/Cuiaba');
        // Formate a data para o formato UTC antes de salvar no banco
        const dataConsultaUtc = format(zonedTime, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", { timeZone: 'UTC' });

        data.data_consulta = new Date(dataConsultaUtc);
        data.medico = { connect: { id: medico_id } };
        data.paciente = { connect: { id: paciente_id } };

        if (!!outras_informacoes)
            data.outras_informacoes = outras_informacoes;

        const consulta = await prismaClient.consultas.create({
            data
        });

        return consulta;
    }
}

export { CreateConsultaService }
