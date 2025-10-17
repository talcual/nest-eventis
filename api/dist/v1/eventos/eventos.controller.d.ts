import { EventoService } from './services/eventos.service';
export declare class EventosController {
    private readonly eventoService;
    constructor(eventoService: EventoService);
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
