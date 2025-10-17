

import { Controller, Get , UseGuards, Param} from '@nestjs/common';
import { EventoService } from './services/eventos.service';
import { AuthGuard } from '@nestjs/passport';
import { PrismaClient as prismaMongo } from '@prisma/client-mongo';

const prismaMg = new prismaMongo();

@Controller('eventos')
//@UseGuards(AuthGuard('jwt'))

export class EventosController {

  constructor(private readonly eventoService:EventoService){}

  @Get()
  async getEventos() {

    await prismaMg.log.create({
      data: { message: `Evento listado` },
    });

    return this.eventoService.list();
  }

  @Get(':id')
  async getEvento(@Param('id') id: number) {
    let x = parseInt(id.toString());
    return this.eventoService.findOne(x);
  }

}
