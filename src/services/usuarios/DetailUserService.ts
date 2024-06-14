import prismaClient from "../../prisma"


class DetailUserService {
    async execute(usuario_id: number) {
        const usuario = await prismaClient.usuarios.findFirst({
            where: {
                id: usuario_id,
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

export { DetailUserService }