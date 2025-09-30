import { Controller, Get } from '@nestjs/common';

@Controller('participante')
export class ParticipanteController {

    @Get()
    list(){
        return [{name: 'Juan'}]
    }

}
