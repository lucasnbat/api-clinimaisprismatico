import prismaClient from "../../prisma";

class ListAllConsultasService {
    async execute() {
        const consultas = await prismaClient.consultas.findMany();

        return consultas;
    }
}

export { ListAllConsultasService };