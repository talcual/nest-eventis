export declare class EventoService {
    create(): Promise<void>;
    list(): Promise<any[]>;
    findOne(id: number): Promise<{
        id: number;
        nombre: string;
        lugar: string;
        ciudad: {
            id: number;
            nombre: string;
        };
    } | null>;
    update(id: number): Promise<void>;
}
