import prismaClient from "../../prisma";

class ListConveniosByIdService {
    async execute(convenio_id: number) {
        const convenio = prismaClient.convenio.findUnique({
            where:{
                id: convenio_id
            }
        });

        return convenio;
    }
}

export { ListConveniosByIdService }