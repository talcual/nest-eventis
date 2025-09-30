import { AppService } from './app.service';
import { AuthService } from './services/auth/auth.service';
import { ConfigService } from '@nestjs/config';
export declare class AppController {
    private readonly appService;
    private authService;
    private configService;
    constructor(appService: AppService, authService: AuthService, configService: ConfigService);
    getHello(): string;
    sigIn(body: any): Promise<{
        access_token: string;
    } | undefined>;
}
