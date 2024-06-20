import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import prismaClient from '../prisma';


interface Payload extends JwtPayload {
    sub: string;
}

export async function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(' ');

    try {
        const decoded = verify(token, process.env.JWT_SECRET) as Payload;

        if (typeof decoded.sub !== 'string') {
            return res.status(401).end();
        }

        // Verifica se o token está na lista de tokens revogados
        const tokenRevoked = await prismaClient.tokenBlacklist.findFirst({
            where: {
                token: token
            }
        });

        if (tokenRevoked) {
            return res.status(401).json({ message: "Token revoked" });
        }

        // Guarda o id do usuário numa variável do req, atualiza o usuário ativo
        req.usuario_id = Number(decoded.sub);

    } catch (error) {
        return res.status(401).end();
    }

    return next();
}
