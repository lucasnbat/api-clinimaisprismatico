import prismaClient from "../../prisma";

class ListConsultasByMedicoAndDateService {
    async execute(medico_id: number, data_consulta: Date) {
        const startOfDay = new Date(data_consulta);
        startOfDay.setUTCHours(0, 0, 0, 0);

        const endOfDay = new Date(data_consulta);
        endOfDay.setUTCHours(23, 59, 59, 999);

        const consultas = await prismaClient.consultas.findMany({
            where: {
                medico_id: medico_id,
                data_consulta: {
                    gte: startOfDay,
                    lte: endOfDay
                }
            }
        });

        return consultas;
    }
}

export { ListConsultasByMedicoAndDateService };
