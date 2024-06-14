import prismaClient from "../../prisma";

interface ConvenioRequest {
    convenio: string,
}

class CreateConvenioService {
    async execute({ convenio }: ConvenioRequest) {
        const convenioConst = prismaClient.convenio.create({
            data: {
                convenio: convenio,
            }
        });

        return convenioConst;
    }
}

export { CreateConvenioService }