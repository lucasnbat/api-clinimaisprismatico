import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface UpdateUserRequest {
    id_usuario_number: number;
    nome: string;
    email: string;
    password: string;
    root: boolean;
    ativo: boolean;
}

class UpdateUserService {
    async execute({ id_usuario_number, nome, email, password, root, ativo}: UpdateUserRequest) {
        const user = await prismaClient.usuarios.findUnique({
            where: {
                id: id_usuario_number,
            }
        });

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        const passwordHash = await hash(password, 8);

        const updatedUser = await prismaClient.usuarios.update({
            where: {
                id: id_usuario_number,
            },
            data: {
                nome: nome,
                email: email,
                password: passwordHash,
                root: root,
                ativo: ativo
            }
        });

        return updatedUser;
    }
}

export { UpdateUserService }