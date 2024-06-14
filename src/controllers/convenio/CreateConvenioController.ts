import { Request, Response } from "express";
import { CreateConvenioService } from "../../services/convenio/CreateConvenioService";

class CreateConvenioController {
    async handle(req: Request, res: Response) {
        const { convenio } = req.body;

        const createConvenioService = new CreateConvenioService();

        const convenioConst = await createConvenioService.execute({convenio});

        return res.json(convenioConst);
    }
}

export { CreateConvenioController }