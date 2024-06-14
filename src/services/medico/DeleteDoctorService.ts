import prismaClient from "../../prisma";

class DeleteDoctorService {
    async execute(medico_id: number) {
        const doctor = await prismaClient.medico.delete({
            where: {
                id: medico_id,
            }
        });

        return doctor;
    }
}

export { DeleteDoctorService }