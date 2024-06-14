import { Request, Response } from "express"
import { ListConveniosService } from "../../services/convenio/ListConveniosService"

class ListConveniosController {
    async handle(req: Request, res: Response) {
        const listConveniosService = new ListConveniosService();

        const convenios = await listConveniosService.execute();

        return res.json(convenios);
    }
}

export { ListConveniosController }