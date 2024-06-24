import prismaClient from "../../prisma";

interface ConsultaFiltosRequest {
    medico_id: number;
    data_consulta: string; // formato: YYYY-MM-DD
    paciente_id: number;
}

class ListAllConsultasService {
    async execute({ medico_id, data_consulta, paciente_id }: ConsultaFiltosRequest) {
        const filters = {} as any;
        if (!!medico_id)
            filters.medico_id = medico_id;

        if (!!data_consulta)
            filters.data_consulta = new Date(data_consulta);

        if (!!paciente_id)
            filters.paciente_id = paciente_id;

        const consultas = await prismaClient.consultas.findMany({
            where: filters,
            include: {
                medico: true,
                paciente: true,
            }
        });

        return consultas;
    }
}

export { ListAllConsultasService };