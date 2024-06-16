import prismaClient from "../../prisma";

interface ConsultaFiltosRequest {
    medico_id: number;
    data_consulta: string; // formato: YYYY-MM-DD
    paciente_id: number;
}

class ListAllConsultasService {
    async execute({ medico_id, data_consulta, paciente_id }: ConsultaFiltosRequest) {
        const consultas = await prismaClient.consultas.findMany({
            where: {
                medico_id: medico_id,
                data_consulta: new Date(data_consulta),
                paciente_id: paciente_id,
            },
            include: {
                medico: true,
                paciente: true,
            }
        });

        return consultas;
    }
}

export { ListAllConsultasService };