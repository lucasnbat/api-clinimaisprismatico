import { Request, Response } from "express";
import { UpdateUserService } from "../../services/usuarios/UpdateUserService";
import { hash } from "bcryptjs";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { usuario_id } = req.params;
        const { nome, email, password, root, ativo } = req.body;

        const id_usuario_number = Number(usuario_id);

        const updateUserService = new UpdateUserService();

        const user = await updateUserService.execute({
            id_usuario_number,
            nome,
            email,
            password,
            root,
            ativo
        });

        return res.status(200).json(user);
    }
}

export { UpdateUserController }