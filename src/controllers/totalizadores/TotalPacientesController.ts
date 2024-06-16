import { Request, Response } from "express";
import { TotalPacientesService } from "../../services/totalizadores/TotalPacientesService";


class TotalPacientesController {
    async handle(req: Request, res: Response) {
        const totalPacientesService = new TotalPacientesService();
        const totalPacientes = await totalPacientesService.execute();

        return res.json({ totalPacientes });
    }
}

export { TotalPacientesController };
