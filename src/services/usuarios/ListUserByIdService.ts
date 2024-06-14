import prismaClient from "../../prisma";

class ListUserByIdService {
    async execute(usuario_id: number) {
        const usuario = prismaClient.usuarios.findFirst({
            where: {
                id: usuario_id,
            }
        });


        return usuario;
    }

}

export { ListUserByIdService }