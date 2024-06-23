import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const convenios = [
        { id: 1, convenio: 'Unimed' },
        { id: 2, convenio: 'Luz e Vida' },
    ];

    for (const convenio of convenios) {
        await prisma.convenio.upsert({
            where: { id: convenio.id },
            update: {},
            create: {
                id: convenio.id,
                convenio: convenio.convenio,
            },
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
