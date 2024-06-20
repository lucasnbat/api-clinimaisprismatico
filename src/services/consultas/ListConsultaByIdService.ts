import prismaClient from "../../prisma";

class ListConsultaByIdService {
    async execute(consulta_id:number) {
        const consulta = await prismaClient.consultas.findUnique({
            where: {
                id: consulta_id,
            }
        });

        return consulta;
    }
}

export { ListConsultaByIdService }