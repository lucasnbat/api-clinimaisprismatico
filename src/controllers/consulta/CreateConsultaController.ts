import { Request, Response } from "express";
import { CreateConsultaService } from "../../services/consultas/CreateConsultaService";

class CreateConsultaController {
    async handle(req: Request, res: Response) {
        const {
            medico_id,
            paciente_id,
            data_consulta,
            horario,
            outras_informacoes,
        } = req.body;

        const createConsultaService = new CreateConsultaService();

        const consulta = await createConsultaService.execute({
            medico_id,
            paciente_id,
            data_consulta,
            horario,
            outras_informacoes,
        });

        return res.json(consulta);
    }
}

export { CreateConsultaController }