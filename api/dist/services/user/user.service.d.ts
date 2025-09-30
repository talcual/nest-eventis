export declare class UserService {
    constructor();
    findOne(username: string): Promise<{
        id: number;
        email: string;
        name: string | null;
        passwd_s: string;
    } | null>;
}
