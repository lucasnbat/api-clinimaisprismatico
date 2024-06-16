import { Request, Response } from "express";
import { TotalConsultasHojeService } from "../../services/totalizadores/TotalConsultasHojeService";

class TotalConsultasHojeController {
    async handle(req: Request, res: Response) {
        const totalConsultasHojeService = new TotalConsultasHojeService();
        const totalConsultasHoje = await totalConsultasHojeService.execute();

        return res.json({ totalConsultasHoje });
    }
}

export { TotalConsultasHojeController };
