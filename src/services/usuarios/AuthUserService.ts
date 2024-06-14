import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string,
    password: string,
}


class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        const usuario = await prismaClient.usuarios.findFirst({
            where: {
                email: email
            }
        })

        if (!usuario) {
            throw new Error('user/password incorrect');
        }

        const senhaBate = await compare(password, usuario.password);

        if (!senhaBate) {
            throw new Error('user/password incorrect');
        }

        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
            throw new Error('JWT secret not defined');
        }

        const token = sign(
            {
                nome: usuario.nome,
                email: usuario.email,
            },
            jwtSecret,
            {
                // subject: usuario.id,
                expiresIn: '30d'
            })

        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token,
        }
    }
}

export { AuthUserService }