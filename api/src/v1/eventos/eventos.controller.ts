import { Controller, Get } from '@nestjs/common';
import { EventoService } from './services/eventos.service';

@Controller('eventos')
export class EventosController {

  constructor(private readonly eventoService:EventoService){

  }

  @Get()
  getEventos() {
    return this.eventoService.list();
  }

}
