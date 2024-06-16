import prismaClient from "../../prisma";

class TotalPacientesService {
    async execute() {
        const totalPacientes = await prismaClient.paciente.count({
            where: {
                ativo: true,
            },
        });

        return totalPacientes;
    }
}

export { TotalPacientesService };
