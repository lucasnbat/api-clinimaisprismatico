import { Request, Response } from "express";
import { ListDoctorsService } from "../../services/medico/ListDoctorsService";

class ListDoctorsController {
    async handle(req: Request, res: Response) {
        const listDoctorsService = new ListDoctorsService();

        const medicos = await listDoctorsService.execute();

        return res.json(medicos);
    }
}

export { ListDoctorsController }