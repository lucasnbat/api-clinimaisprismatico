import prismaClient from "../../prisma"

class ListDoctorsService {
    async execute() {
        const medicos = prismaClient.medico.findMany();

        return medicos;
    }
}

export { ListDoctorsService }