import { Request, Response } from "express";
import { ListAllConsultasService } from "../../services/consultas/ListAllConsultasService";

class ListAllConsultasController {
    async handle(request: Request, response: Response) {
        const { medico_id, data_consulta, paciente_id } = request.body;
        const listAllConsultasService = new ListAllConsultasService();

        const consultas = await listAllConsultasService.execute({
            medico_id: Number(medico_id),
            data_consulta: data_consulta as string,
            paciente_id: Number(paciente_id),
        });

        return response.json(consultas);
    }
}

export { ListAllConsultasController };