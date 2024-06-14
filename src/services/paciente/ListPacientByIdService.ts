import prismaClient from "../../prisma";

class ListPacientByIdService {
    async execute(paciente_id: number) {
        const paciente = await prismaClient.paciente.findUnique({
            where: {
                id: paciente_id,
            }
        });

        return paciente;
    }
}

export { ListPacientByIdService }