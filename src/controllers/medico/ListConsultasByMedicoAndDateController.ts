import { Request, Response } from "express";
import { ListConsultasByMedicoAndDateService } from "../../services/medico/ListConsultasByMedicoAndDateService";

class ListConsultasByMedicoAndDateController {
    async handle(request: Request, response: Response) {
        const { medico_id, data_consulta } = request.query;

        if (!medico_id || !data_consulta) {
            return response.status(400).json({ error: "Missing parameters" });
        }

        const listConsultasByMedicoAndDateService = new ListConsultasByMedicoAndDateService();

        const consultas = await listConsultasByMedicoAndDateService.execute(Number(medico_id), new Date(data_consulta as string));

        return response.json(consultas);
    }
}

export { ListConsultasByMedicoAndDateController };
