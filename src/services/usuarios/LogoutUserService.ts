import prismaClient from "../../prisma";

class LogoutUserService {
    async execute(token: string) {
        await prismaClient.tokenBlacklist.create({
            data: {
                token: token
            }
        });

        return { message: "User logged out successfully" };
    }
}

export { LogoutUserService }
