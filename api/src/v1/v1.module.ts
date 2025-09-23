import { Module } from '@nestjs/common';
import { EventosController } from './eventos/eventos.controller';
import { EventoService } from './eventos/services/eventos.service';
import { CiudadController } from './ciudad/ciudad.controller';


@Module({
  controllers: [EventosController, CiudadController],
  providers: [EventoService]
})
export class V1Module {}
