import { Injectable } from '@nestjs/common';

@Injectable()
export class EventoService {

    list(): Array<any>{
        return [
            {'nombre' : 'CaribeBiz Forum'},
            {'nombre' : 'Concierto'}
        ];
    }

}
