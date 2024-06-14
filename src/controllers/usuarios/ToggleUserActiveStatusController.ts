import { Request, Response } from "express";
import { ToggleUserActiveStatusService } from "../../services/usuarios/ToggleUserActiveStatusService";

class ToggleUserActiveStatusController {
    async handle(req: Request, res: Response) {
        const { usuario_id } = req.params;

        const toggleUserActiveStatusService = new ToggleUserActiveStatusService();

        const toggleUsuario = await toggleUserActiveStatusService.execute(Number(usuario_id));

        return res.json(toggleUsuario);
    }
}

export { ToggleUserActiveStatusController }