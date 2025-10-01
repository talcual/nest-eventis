"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipanteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../../../generated/prisma/index.js");
let ParticipanteService = class ParticipanteService {
    prisma = new prisma_1.PrismaClient();
    async getAllParticipantes() {
        return this.prisma.participante.findMany();
    }
    async createParticipante(data) {
        return this.prisma.participante.create({ data });
    }
    async getParticipante(id) {
        return this.prisma.participante.findUnique({ where: { id } });
    }
    async updateParticipante(id, data) {
        return this.prisma.participante.update({ where: { id }, data });
    }
    async deleteParticipante(id) {
        return this.prisma.participante.delete({ where: { id } });
    }
};
exports.ParticipanteService = ParticipanteService;
exports.ParticipanteService = ParticipanteService = __decorate([
    (0, common_1.Injectable)()
], ParticipanteService);
//# sourceMappingURL=participante.service.js.map