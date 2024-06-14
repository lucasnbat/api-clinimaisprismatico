import prismaClient from "../../prisma";



class DeleteUserService {
    async execute(usuario_id: number) {
        const usuario = prismaClient.usuarios.delete({
            where: {
                id: usuario_id,
            }
        });

        return usuario;
    }
}

export { DeleteUserService }