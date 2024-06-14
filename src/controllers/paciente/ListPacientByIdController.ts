import { Response, Request } from "express";
import { ListPacientByIdService } from "../../services/paciente/ListPacientByIdService";

class ListPacientByIdController {
    async handle(req: Request, res: Response) {
        const { paciente_id } = req.params;

        const paciente_id_number = Number(paciente_id);

        const listPacientByIdService = new ListPacientByIdService();

        const paciente = await listPacientByIdService.execute(paciente_id_number);

        return res.json(paciente);

    }
}

export { ListPacientByIdController }