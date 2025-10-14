

import { Controller, Get , UseGuards} from '@nestjs/common';
import { EventoService } from './services/eventos.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('eventos')
@UseGuards(AuthGuard('jwt'))

export class EventosController {

  constructor(private readonly eventoService:EventoService){}

  @Get()
  getEventos() {
    return this.eventoService.list();
  }

}
