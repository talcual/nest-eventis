

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





   - Agregar un modulo nuevo, por ejemplo realtime
   - configurar en este modulo todo lo que tiene que ver con WebSocket
   - setup de rutas y servicios necesarios para emitir eventos
   - instalar las dependencias necesarias: npm install @nestjs/websockets @nestjs/platform-socket.io socket.io

import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}