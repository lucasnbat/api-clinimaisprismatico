import { Request, Response } from "express";
import { UpdateDoctorService } from "../../services/medico/UpdateDoctorService";

class UpdateDoctorController {
    async handle(req: Request, res: Response) {
        const { medico_id } = req.params;

        const medico_id_number = Number(medico_id);

        const {
            codigo,
            cpf,
            nome,
            crm,
            conselho,
            uf_conselho,
            especialidade,
            email,
            telefone,
            contato_adicional,
            ativo,
        } = req.body;

        const updateDoctorService = new UpdateDoctorService();

        try {
            const paciente = await updateDoctorService.execute({
                codigo,
                cpf,
                nome,
                crm,
                conselho,
                uf_conselho,
                especialidade,
                email,
                telefone,
                contato_adicional,
                ativo,
                medico_id: Number(medico_id)
            });

            return res.json(paciente);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

export { UpdateDoctorController }