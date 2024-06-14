import prismaClient from "../../prisma"

class DeletePacientService {
    async execute(paciente_id: number) {
        const paciente = await prismaClient.paciente.delete({
            where: {
                id: paciente_id,
            }
        });

        return paciente;
    }
}

export { DeletePacientService }