import prismaClient from "../../prisma";

class TotalConsultasHojeService {
    async execute() {
        const hoje = new Date();
        const inicioDoDia = new Date(hoje.setHours(0, 0, 0, 0));
        const fimDoDia = new Date(hoje.setHours(23, 59, 59, 999));

        const totalConsultasHoje = await prismaClient.consultas.count({
            where: {
                data_consulta: {
                    gte: inicioDoDia,
                    lte: fimDoDia,
                },
                is_cancelada: false,
            },
        });

        return totalConsultasHoje;
    }
}

export { TotalConsultasHojeService };
