import { Response, Request } from "express";
import { SetNewPasswordService } from "../../services/usuarios/SetNewPasswordService";

class SetNewPasswordController {
    async handle(req: Request, res: Response) {
        const { usuario_id } = req.params;
        const { password } = req.body;

        const setNewPasswordService = new SetNewPasswordService();
        const usuarioAtualizado = await setNewPasswordService.execute(
            Number(usuario_id),
            password,
        )

        return res.json(usuarioAtualizado);
    }
}

export { SetNewPasswordController }