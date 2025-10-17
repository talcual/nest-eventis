"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../../../generated/prisma/index.js");
const prisma = new prisma_1.PrismaClient();
let EventoService = class EventoService {
    async create() {
        const newUser = await prisma.evento.create({
            data: {
                nombre: '',
                lugar: ''
            }
        });
        console.log(newUser);
    }
    async list() {
        let listado = await prisma.evento.findMany({
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
        });
        return listado;
    }
    async findOne(id) {
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
        });
        return user;
    }
    async update(id) {
        const updatedUser = await prisma.evento.update({
            where: { id: id },
            data: {
                nombre: 'Evento Actualizado',
                lugar: 'Lugar Actualizado'
            }
        });
        console.log(updatedUser);
    }
};
exports.EventoService = EventoService;
exports.EventoService = EventoService = __decorate([
    (0, common_1.Injectable)()
], EventoService);
//# sourceMappingURL=eventos.service.js.map