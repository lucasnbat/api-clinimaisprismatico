import prismaClient from "../../prisma";
import { Prisma } from "@prisma/client";

interface ConsultaRequest {
    medico_id: number;
    data_consulta: string; // formato: YYYY-MM-DD
    horario: string; // formato: HH:mm
}

class ListConsultasByMedicoAndDateAndTimeService {
    async execute({ medico_id, data_consulta, horario }: ConsultaRequest) {
        const _filter: any = {}
        if (!!medico_id)
            _filter.medico_id = medico_id;

        if (!!data_consulta){
            _filter.data_consulta = {
                gte: new Date(`${data_consulta}T00:00:00.000Z`),
                lte: new Date(`${data_consulta}T23:59:59.999Z`),
            }
        }

        console.log(_filter);
            // _filter.data_consulta = new Date(data_consulta);

        if (!!horario)
            _filter.horario = horario;

        const consultas = await prismaClient.consultas.findMany({
            where: _filter,
            include: {
                medico: true,
                paciente: true,
            },
        });

        return !!consultas.length ? consultas.map(c => c.horario) : []
    }
}

export { ListConsultasByMedicoAndDateAndTimeService };
