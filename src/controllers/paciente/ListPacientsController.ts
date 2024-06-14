import { Request, Response } from "express";
import { ListPacientsService } from "../../services/paciente/ListPacientsService";

class ListPacientsController {
    async handle(req: Request, res: Response) {
        const listPacientsService = new ListPacientsService();

        const listaPacientes = await listPacientsService.execute();

        return res.json(listaPacientes);
    }
}

export { ListPacientsController }