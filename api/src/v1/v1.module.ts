import { Module, UseGuards  } from '@nestjs/common';
import { EventosController } from './eventos/eventos.controller';
import { EventoService } from './eventos/services/eventos.service';
import { CiudadController } from './ciudad/ciudad.controller';
import { UserService } from 'src/services/user/user.service';
import { AuthService } from 'src/services/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategies/jwt.strategy';


@Module({
  imports:[],
  controllers: [EventosController, CiudadController],
  providers: [
    EventoService,
    UserService, 
    AuthService, 
    JwtService,
    JwtStrategy
  ]
})
export class V1Module {}
