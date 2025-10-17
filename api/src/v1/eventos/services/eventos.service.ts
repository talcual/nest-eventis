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
        let listado: Array<any> = await prisma.evento.findMany({
            select: {
                id: true,
                nombre: true,
                lugar: true,
                ciudad: {
                    select: {
                        id: true,
                        nombre: true
                    }
                }
            }
        })

        return listado;
    }

    async findOne(id: number){
        const user = await prisma.evento.findUnique({
            where: { id: id },
            select: {
                id: true,
                nombre: true,
                lugar: true,
                ciudad: {
                    select: {
                        id: true,
                        nombre: true
                    }
                }
            }
        })

        return user;
    }

    async update(id: number){
        const updatedUser = await prisma.evento.update({
            where: { id: id },
            data: {
                nombre: 'Evento Actualizado',
                lugar: 'Lugar Actualizado'
            }
        })

        console.log(updatedUser)
    }

}
