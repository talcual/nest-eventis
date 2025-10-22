import { EventoService } from './services/eventos.service';
import { UserService } from '../../services/user/user.service';
export declare class EventosController {
    private readonly eventoService;
    private readonly userService;
    constructor(eventoService: EventoService, userService: UserService);
    getEventos(): Promise<any[]>;
    getEvento(id: number): Promise<{
        id: number;
        nombre: string;
        lugar: string;
        ciudad: {
            id: number;
            nombre: string;
        };
    } | null>;
}
