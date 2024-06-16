import prismaClient from "../../prisma";

class TotalMedicosService {
    async execute() {
        const totalMedicos = await prismaClient.medico.count({
            where: {
                ativo: true,
            },
        });

        return totalMedicos;
    }
}

export { TotalMedicosService };
