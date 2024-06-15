import { Request, Response } from "express";
import { UpdateConsultaService } from "../../services/consultas/UpdateConsultaService";

class UpdateConsultaController {
    async handle(req: Request, res: Response) {
        const { consulta_id } = req.params;

        const {
            medico_id,
            paciente_id,
            data_consulta,
            horario,
            outras_informacoes,
        } = req.body;

        const updateConsultaService = new UpdateConsultaService();

        const consulta = await updateConsultaService.execute({
            medico_id,
            paciente_id,
            data_consulta,
            horario,
            outras_informacoes,
            consulta_id: Number(consulta_id),
        });

        return res.json(consulta);
    }
}

export { UpdateConsultaController }