import prismaClient from "../../prisma"


class ListUsersService {
    async execute() {
        const listaUsuarios = prismaClient.usuarios.findMany({
            orderBy: {
                created_at: 'desc',
            }
        });

        return listaUsuarios;
    }
}

export { ListUsersService }