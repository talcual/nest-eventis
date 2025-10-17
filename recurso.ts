

const usuarios = await prisma.usuario.findMany({
  include: {
    posts: true, // esto hace el "join"
  },
});


const post = await prisma.post.findMany({
  include: {
    usuario: true, // relación inversa
  },
});


const usuarios = await prisma.usuario.findMany({
  select: {
    id: true,
    nombre: true,
    posts: {
      select: {
        titulo: true,
      },
    },
  },
});


const usuarios = await prisma.usuario.findMany({
  where: {
    posts: {
      some: {
        titulo: {
          contains: 'Prisma',
        },
      },
    },
  },
  include: {
    posts: true,
  },
});



const posts = await prisma.post.findMany({
  include: {
    usuario: true,
    comentarios: {
      include: {
        usuario: true,
      },
    },
  },
});





generator client {
  provider = "prisma-client-js"
  output   = "../../node_modules/@prisma/client-mongo"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL_MONGO")
}

model Log {
  id      String   @id @default(auto()) @map("_id") @db.ObjectId
  message String
  fecha   DateTime @default(now())
}



npx prisma generate --schema=prisma/mongo/schema.prisma


import { PrismaClient as PrismaMongo } from '@prisma/client-mongo';
export const prismaMg = new PrismaMongo();


  await prismaMg.log.create({
    data: { message: `Usuario creado: ${usuario.nombre}` },
  });