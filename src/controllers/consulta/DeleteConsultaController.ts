import { Request, Response } from "express";
import { DeleteConsultaService } from "../../services/consultas/DeleteConsultaService";

class DeleteConsultaController {
    async handle(req: Request, res: Response) {
        const { consulta_id } = req.params;

        const consulta_id_number = Number(consulta_id)

        const deleteConsultaController = new DeleteConsultaService();

        const consulta = await deleteConsultaController.execute(consulta_id_number);

        return res.json(consulta);
    }
}

export { DeleteConsultaController }