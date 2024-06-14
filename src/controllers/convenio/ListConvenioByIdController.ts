import { Request, Response } from "express"

import { ListConveniosByIdService } from "../../services/convenio/ListConvenioByIdService";

class ListConvenioByIdController {
    async handle(req: Request, res: Response) {
        const { convenio_id } = req.params;

        const convenio_id_number = Number(convenio_id);

        const listConveniosService = new ListConveniosByIdService();

        const convenios = await listConveniosService.execute(convenio_id_number);

        return res.json(convenios);
    }
}

export { ListConvenioByIdController }