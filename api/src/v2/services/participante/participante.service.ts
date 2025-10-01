import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ParticipanteService {
    private prisma = new PrismaClient();

    async getAllParticipantes() {
        return this.prisma.participante.findMany();
    }
    
    async createParticipante(data: any) {
        return this.prisma.participante.create({ data });
    }

    async getParticipante(id: number) {
        return this.prisma.participante.findUnique({ where: { id } });
    }

    async updateParticipante(id: number, data: any) {
        return this.prisma.participante.update({ where: { id }, data });
    }

    async deleteParticipante(id: number) {
        return this.prisma.participante.delete({ where: { id } });
    }
}
