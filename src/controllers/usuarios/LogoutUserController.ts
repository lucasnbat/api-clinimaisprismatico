import { Request, Response } from "express";
import { LogoutUserService } from "../../services/usuarios/LogoutUserService";

class LogoutUserController {
    async handle(req: Request, res: Response) {
        // Bearer asdhfafasjfhsjkfhsjdfskdf
        // asdhfafasjfhsjkfhsjdfskdf

        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "Token not provided" });
        }

        const logoutUserService = new LogoutUserService();

        await logoutUserService.execute(token);

        return res.json({ message: "User logged out successfully" });
    }
}

export { LogoutUserController }
