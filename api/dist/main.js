"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin)
                return callback(null, true);
            try {
                const url = new URL(origin);
                const host = url.hostname.toLowerCase();
                const allowedHost = 'github.dev';
                if (host === allowedHost || host.endsWith('.' + allowedHost)) {
                    return callback(null, true);
                }
            }
            catch (e) {
            }
            callback(new Error('CORS policy: origin not allowed'));
        },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        allowedHeaders: 'Content-Type, Accept, Authorization, X-Requested-With',
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map