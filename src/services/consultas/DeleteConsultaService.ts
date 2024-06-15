import prismaClient from "../../prisma";

class DeleteConsultaService {
    async execute(consulta_id: number) {
        const consulta = prismaClient.consultas.delete({
            where: {
                id: consulta_id,
            }
        });

        return consulta;
    }
}

export { DeleteConsultaService }