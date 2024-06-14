import prismaClient from "../../prisma"

class ListDoctorById {
    async execute(medico_id) {
        const medico = await prismaClient.medico.findUnique({
            where: {
                id: medico_id,
            }
        }
        );

        return medico;
    }
}

export { ListDoctorById }