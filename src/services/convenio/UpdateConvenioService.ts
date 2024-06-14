import prismaClient from "../../prisma"

class UpdateConvenioService {
    async execute(convenio: string, convenio_id: number) {

        const atualizarConvenio = await prismaClient.convenio.update({
            where: {
                id: convenio_id,
            },
            data: {
                convenio: convenio,
            },
            select: {
                id: true, convenio: true
            }
        });

        return atualizarConvenio;
    }
}

export { UpdateConvenioService }