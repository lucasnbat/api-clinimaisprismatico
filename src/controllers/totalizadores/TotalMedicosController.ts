import { Request, Response } from "express";
import { TotalMedicosService } from "../../services/totalizadores/TotalMedicosService";

class TotalMedicosController {
    async handle(req: Request, res: Response) {
        const totalMedicosService = new TotalMedicosService();
        const totalMedicos = await totalMedicosService.execute();

        return res.json({ totalMedicos });
    }
}

export { TotalMedicosController };
