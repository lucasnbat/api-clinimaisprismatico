import { Request, Response } from "express";
import { DeleteUserService } from "../../services/usuarios/DeleteUserService";

class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { usuario_id } = req.params;

        const deleteUserService = new DeleteUserService();

        const usuario = await deleteUserService.execute(Number(usuario_id));

        return res.json(usuario);
    }
}

export { DeleteUserController }