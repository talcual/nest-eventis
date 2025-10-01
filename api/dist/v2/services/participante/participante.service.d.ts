export declare class ParticipanteService {
    private prisma;
    getAllParticipantes(): Promise<{
        id: number;
        id_user: number;
        id_evento: number;
    }[]>;
    createParticipante(data: any): Promise<{
        id: number;
        id_user: number;
        id_evento: number;
    }>;
    getParticipante(id: number): Promise<{
        id: number;
        id_user: number;
        id_evento: number;
    } | null>;
    updateParticipante(id: number, data: any): Promise<{
        id: number;
        id_user: number;
        id_evento: number;
    }>;
    deleteParticipante(id: number): Promise<{
        id: number;
        id_user: number;
        id_evento: number;
    }>;
}
