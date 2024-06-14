import { Request, Response } from "express";
import { DetailUserService } from "../../services/usuarios/DetailUserService";

class DetailUserController {
    async handle(req: Request, res: Response) {
        const usuario_id = req.usuario_id;

        const usuario = new DetailUserService();

        const usuarioRetornado = await usuario.execute(usuario_id);

        return res.json(usuarioRetornado);
    }
}

export { DetailUserController }