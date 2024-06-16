import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';

interface Payload extends JwtPayload {
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    // Bearer 
    // token = sahdfafhsjkfhsajfkhsfksjfhasjkfhas

    const [, token] = authToken.split(' ');

    try {
        const decoded = verify(token, process.env.JWT_SECRET) as Payload;

        if (typeof decoded.sub !== 'string') {
            return res.status(401).end();
        }

        // guarda id do user numa var do req, atualiza o user ativo
        req.usuario_id = Number(decoded.sub);

    } catch (error) {
        return res.status(401).end();
    }

    return next();
}
