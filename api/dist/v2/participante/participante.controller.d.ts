import { ParticipanteService } from '../services/participante/participante.service';
export declare class ParticipanteController {
    private readonly participanteService;
    constructor(participanteService: ParticipanteService);
    list(): Promise<{
        id: number;
        id_user: number;
        id_evento: number;
    }[]>;
}
