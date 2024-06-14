import prismaClient from "../../prisma";

class ListPacientsService {
    async execute() {
        const listaPacientes = await prismaClient.paciente.findMany();

        return listaPacientes;

    }
}

export { ListPacientsService }
