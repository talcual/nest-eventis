import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient()

@Injectable()
export class EventoService {

    async create(){
        const newUser = await prisma.evento.create({
            data: {
                nombre: '',
                lugar: ''
            }
        })

        console.log(newUser)
    }

    async list(){
        let listado: Array<any> = await prisma.evento.findMany()
        return listado;
    }

}
