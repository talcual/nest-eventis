import { Controller, Get, UseGuards } from '@nestjs/common';
import { ParticipanteService } from '../services/participante/participante.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('participante')
@UseGuards(AuthGuard('jwt'))
export class ParticipanteController {
    constructor(private readonly participanteService: ParticipanteService) {}

    @Get()
    list(){
        return this.participanteService.getAllParticipantes();
    }

}
