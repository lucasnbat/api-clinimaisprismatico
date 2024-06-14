import prismaClient from "../../prisma"

class UpdateConvenioService {
    async execute(convenio_id: number, convenio: string) {

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