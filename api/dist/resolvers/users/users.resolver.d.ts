import { UserService } from '../../services/user/user.service';
export declare class UsersResolver {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<{
        id: number;
        email: string;
        name: string | null;
        passwd_s: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        email: string;
        name: string | null;
        passwd_s: string;
    } | null>;
}
