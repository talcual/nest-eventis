import { EventoService } from './services/eventos.service';
export declare class EventosController {
    private readonly eventoService;
    constructor(eventoService: EventoService);
    getEventos(): any[];
}
