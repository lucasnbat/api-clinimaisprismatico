import prismaClient from "../../prisma";

class ToggleConsultaStatusService {
    async execute(consulta_id: number) {

        try {
            const consulta = await prismaClient.consultas.findUnique({
                where: {
                    id: consulta_id,
                },
            });

            if (!consulta) {
                throw new Error('Consulta not found');
            }

            const updatedConsulta = await prismaClient.consultas.update({
                where: {
                    id: consulta_id,
                },
                data: {
                    is_cancelada: !consulta.is_cancelada,
                },
            });

            return updatedConsulta;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export { ToggleConsultaStatusService };
