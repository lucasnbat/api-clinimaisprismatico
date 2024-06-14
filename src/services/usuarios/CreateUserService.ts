import prismaClient from '../../prisma/index';
import { hash } from 'bcryptjs';

interface UserRequest {
    nome: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ nome, email, password }: UserRequest) {

        if (!email) {
            throw new Error('Email incorrect');
        }

        const usuarioJaExiste = await prismaClient.usuarios.findFirst({
            where: {
                email: email,
            }
        })

        if (usuarioJaExiste) {
            throw new Error('User already exists');
        }

        // salto de 8 (padrão recomendado)
        const passwordHash = await hash(password, 8);

        const usuario = await prismaClient.usuarios.create({
            data: {
                nome: nome,
                email: email,
                password: passwordHash,
                root: false,
                ativo: true,
            },
            select: {
                id: true,
                nome: true,
                email: true,
            }
        })

        return usuario;
    }
}

export { CreateUserService }