import { Response, Request } from "express";
import { CreateUserService } from "../services/usuarios/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { nome, email, password } = req.body;

        const usuario = new CreateUserService();

        const usuarioCriado = await usuario.execute({
            nome, email, password,
        })

        return res.json(usuarioCriado);
    }
}

export { CreateUserController }