import { Request, Response } from "express";
import { ListUserByIdService } from "../../services/usuarios/ListUserByIdService";

class ListUserByIdController {
    async handle(req: Request, res: Response) {
        const { usuario_id } = req.params;

        const listUserByIdService = new ListUserByIdService();

        const usuario = await listUserByIdService.execute(Number(usuario_id));

        return res.json(usuario);
    }
}

export { ListUserByIdController }