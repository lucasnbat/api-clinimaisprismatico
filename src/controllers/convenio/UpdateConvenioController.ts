import { Request, Response } from "express";
import { UpdateConvenioService } from "../../services/convenio/UpdateConvenioService";

class UpdateConvenioController {
    async handle(req: Request, res: Response) {
        const { convenio_id } = req.params;

        const convenio_id_number = Number(convenio_id);

        const { convenio } = req.body;

        const updateConvenioService = new UpdateConvenioService();

        const convenioConst = await updateConvenioService.execute(convenio, convenio_id_number);

        return res.json(convenioConst);

    }
}

export { UpdateConvenioController }