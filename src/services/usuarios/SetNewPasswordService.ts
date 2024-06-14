import prismaClient from "../../prisma"

class SetNewPasswordService {
    async execute(usuario_id: number, password: string) {

        const atualizarSenha = await prismaClient.usuarios.update({
            where: {
                id: usuario_id,
            },
            data: {
                password: password,
            },
            select: {
                id: true, nome: true, password: true
            }
        });

        return atualizarSenha;
    }
}

export { SetNewPasswordService }