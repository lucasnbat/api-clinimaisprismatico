import { Request, Response } from "express";
import { DeleteConvenioService } from "../../services/convenio/DeleteConvenioService";

class DeleteConvenioController {
    async handle(req: Request, res: Response) {
        const { convenio_id } = req.params;

        const convenio_id_number = Number(convenio_id);

        const deleteConvenioService = new DeleteConvenioService();

        const pacienteDeletado = await deleteConvenioService.execute(convenio_id_number);

        return res.json(pacienteDeletado);
    }
}

export { DeleteConvenioController }