import { Request, Response } from "express";
import { UpdatePacientService } from "../../services/paciente/UpdatePacientService";

class UpdatePacientController {
    async handle(req: Request, res: Response) {
        const { paciente_id } = req.params;

        const {
            cpf,
            nome_completo,
            data_nascimento,
            endereco,
            celular,
            contato_adicional,
            convenio_id,
            email,
            cns,
            numero_carteira
        } = req.body;

        const updatePacientService = new UpdatePacientService();

        try {
            const paciente = await updatePacientService.execute({
                cpf,
                nome_completo,
                data_nascimento,
                endereco,
                celular,
                contato_adicional,
                convenio_id,
                email,
                cns,
                numero_carteira,
                paciente_id: Number(paciente_id) // Ensure paciente_id is a number
            });

            return res.json(paciente);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

export { UpdatePacientController };
