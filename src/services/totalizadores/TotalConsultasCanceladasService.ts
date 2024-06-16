import prismaClient from "../../prisma";

class TotalConsultasCanceladasService {
    async execute() {
        const totalConsultasCanceladas = await prismaClient.consultas.count({
            where: {
                is_cancelada: true,
            },
        });

        return totalConsultasCanceladas;
    }
}

export { TotalConsultasCanceladasService };
