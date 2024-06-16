import prismaClient from "../../prisma";
import { format, toZonedTime } from 'date-fns-tz';

interface ConsultaRequest {
    medico_id: number,
    paciente_id: number,
    data_consulta: string,  
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
        // Combine data e horário para criar um objeto Date
        const zonedDateTime = new Date(`${data_consulta}T${horario}`);
        // Converta o objeto Date para o fuso horário 'America/Cuiaba'
        const zonedTime = toZonedTime(zonedDateTime, 'America/Cuiaba');
        // Formate a data para o formato UTC antes de salvar no banco
        const dataConsultaUtc = format(zonedTime, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", { timeZone: 'UTC' });

        const consulta = await prismaClient.consultas.create({
            data: {
                medico_id: medico_id,
                paciente_id: paciente_id,
                data_consulta: new Date(dataConsultaUtc),  // Use a data em UTC
                horario: horario,
                outras_informacoes: outras_informacoes,
            }
        });

        return consulta;
    }
}

export { CreateConsultaService }
