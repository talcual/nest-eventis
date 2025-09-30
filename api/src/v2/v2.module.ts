import { Module } from '@nestjs/common';
import { ParticipanteController } from './participante/participante.controller';

@Module({
  controllers: [ParticipanteController]
})
export class V2Module {}
