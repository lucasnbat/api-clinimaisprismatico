import prismaClient from "../../prisma";
import { Prisma } from "@prisma/client";

interface ConsultaRequest {
    medico_id: number;
    data_consulta: string; // formato: YYYY-MM-DD
    horario: string; // formato: HH:mm
}

class ListConsultasByMedicoAndDateAndTimeService {
    async execute({ medico_id, data_consulta, horario }: ConsultaRequest) {
        const consultas = await prismaClient.consultas.findMany({
            where: {
                medico_id: medico_id,
                data_consulta: new Date(data_consulta),
                horario: horario,
                is_cancelada: false,
            },
            include: {
                medico: true,
                paciente: true,
            },
        });

        return consultas;
    }
}

export { ListConsultasByMedicoAndDateAndTimeService };
