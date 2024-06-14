import prismaClient from "../../prisma"

class DeleteConvenioService {
    async execute(convenio_id: number) {
        const convenio = await prismaClient.convenio.delete({
            where: {
                id: convenio_id,
            }
        });

        return convenio;
    }
}

export { DeleteConvenioService }