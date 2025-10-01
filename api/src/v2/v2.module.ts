import { Module } from '@nestjs/common';
import { ParticipanteController } from './participante/participante.controller';
import { ParticipanteService } from './services/participante/participante.service';

@Module({
  controllers: [ParticipanteController],
  providers: [ParticipanteService]
})
export class V2Module {}
