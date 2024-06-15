import { Request, Response } from "express";
import { ToggleConsultaStatusService } from "../../services/consultas/ToggleConsultaStatusService";

class ToggleConsultaStatusController {
    async handle(req: Request, res: Response) {
        try {
            const { consulta_id } = req.params;

            const consulta_id_number = Number(consulta_id)

            const toggleConsultaStatusService = new ToggleConsultaStatusService();

            const toggleConsulta = await toggleConsultaStatusService.execute(consulta_id_number);

            return res.json(toggleConsulta);
        } catch (err) {
            return res.status(400).json({
                message: err.message
            })
        }
    }
}

export { ToggleConsultaStatusController }