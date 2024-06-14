import { Request, Response } from "express";

import { ListUsersService } from "../../services/usuarios/ListUsersService";

class ListUsersController {
    async handle(req: Request, res: Response) {
        const listUsersService = new ListUsersService();

        const listaUsuarios = await listUsersService.execute();

        return res.json(listaUsuarios);
    }
}

export { ListUsersController }