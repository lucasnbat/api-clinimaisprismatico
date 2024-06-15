import { Request, Response } from "express";
import { ListConsultaByIdService } from "../../services/consultas/ListConsultaByIdService";

class ListConsultaByIdController {
    async handle(req: Request, res: Response) {
        const { consulta_id } = req.params;

        const consulta_id_number = Number(consulta_id)

        const listConsultaByIdService = new ListConsultaByIdService();

        const consulta = await listConsultaByIdService.execute(consulta_id_number);

        return res.json(consulta);
    }
}

export { ListConsultaByIdController }