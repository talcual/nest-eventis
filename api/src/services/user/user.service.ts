import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient()

@Injectable()
export class UserService {

    constructor(){}

    async findOne(username: string){
        return await prisma.user.findFirst({where : {email: username}})
    }

}
