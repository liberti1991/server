import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      nome: "john Doe",
      email: "john.doe@gmail.com",
      avatarUrl: "https://github.com/liberti1991.png",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Example Pool",
      code: "Bol123",
      userId: user.id,

      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });
}

const game = await prisma.game.create({
  data: {
    date: '2022-11-02T14:03:53.201Z',
    
  }
})

main();
