import prismaClient from "../../prisma";

class ListConveniosService {
    async execute() {
        const convenios = prismaClient.convenio.findMany();

        return convenios;
    }
}

export { ListConveniosService }