import { Request, Response } from "express";
import { ListAllConsultasService } from "../../services/consultas/ListAllConsultasService";

class ListAllConsultasController {
    async handle(request: Request, response: Response) {
        const listAllConsultasService = new ListAllConsultasService();

        const consultas = await listAllConsultasService.execute();

        return response.json(consultas);
    }
}

export { ListAllConsultasController };