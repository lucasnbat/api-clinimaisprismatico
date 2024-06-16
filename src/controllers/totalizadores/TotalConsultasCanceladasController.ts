import { Request, Response } from "express";
import { TotalConsultasCanceladasService } from "../../services/totalizadores/TotalConsultasCanceladasService";

class TotalConsultasCanceladasController {
    async handle(req: Request, res: Response) {
        const totalConsultasCanceladasService = new TotalConsultasCanceladasService();
        const totalConsultasCanceladas = await totalConsultasCanceladasService.execute();

        return res.json({ totalConsultasCanceladas });
    }
}

export { TotalConsultasCanceladasController };
