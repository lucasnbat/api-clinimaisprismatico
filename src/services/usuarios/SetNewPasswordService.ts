import prismaClient from "../../prisma"
import {hash} from "bcryptjs";

class SetNewPasswordService {
    async execute(usuario_id: number, password: string) {

        const passwordHash = await hash(password, 8);
        const atualizarSenha = await prismaClient.usuarios.update({
            where: {
                id: usuario_id,
            },
            data: {
                password: passwordHash,
            },
            select: {
                id: true, nome: true, password: true
            }
        });

        return atualizarSenha;
    }
}

export { SetNewPasswordService }