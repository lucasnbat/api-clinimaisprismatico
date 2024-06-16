import { Request, Response } from "express";
import { ListConsultasByMedicoAndDateAndTimeService } from "../../services/consultas/ListConsultasByMedicoAndDateAndTimeService";

class ListConsultasByMedicoAndDateAndTimeController {
    async handle(req: Request, res: Response) {
        const { medico_id, data_consulta, horario } = req.query;

        const listConsultasService = new ListConsultasByMedicoAndDateAndTimeService();
        const consultas = await listConsultasService.execute({
            medico_id: Number(medico_id),
            data_consulta: data_consulta as string,
            horario: horario as string,
        });

        return res.json(consultas);
    }
}

export { ListConsultasByMedicoAndDateAndTimeController };
