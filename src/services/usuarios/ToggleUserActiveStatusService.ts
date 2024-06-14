import prismaClient from "../../prisma";

class ToggleUserActiveStatusService {
    async execute(usuario_id: number) {

        const usuario = await prismaClient.usuarios.findUnique({
            where: {
                id: usuario_id,
            },
        });

        if (!usuario) {
            throw new Error('User not found');
        }

        const updatedUsuario = await prismaClient.usuarios.update({
            where: {
                id: usuario_id,
            },
            data: {
                ativo: !usuario.ativo,
            },
        });

        return updatedUsuario;
    }
}

export { ToggleUserActiveStatusService };
