import { Request, Response } from "express";
import { DeletePacientService } from "../../services/paciente/DeletePacientService";

class DeletePacientController {
    async handle(req: Request, res: Response) {
        const { paciente_id } = req.params;

        const paciente_id_number = Number(paciente_id);

        const deletePacientService = new DeletePacientService();

        const pacienteDeletado = await deletePacientService.execute(paciente_id_number);

        return res.json(pacienteDeletado);
    }
}

export { DeletePacientController }