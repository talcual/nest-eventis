"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const v1_module_1 = require("./v1/v1.module");
const v2_module_1 = require("./v2/v2.module");
const v3_module_1 = require("./v3/v3.module");
const auth_service_1 = require("./services/auth/auth.service");
const user_service_1 = require("./services/user/user.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env'
            }),
            v1_module_1.V1Module,
            v2_module_1.V2Module,
            core_1.RouterModule.register([
                {
                    path: 'v1',
                    module: v1_module_1.V1Module
                },
                {
                    path: 'v2',
                    module: v2_module_1.V2Module
                }
            ]),
            v3_module_1.V3Module,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    const secret = configService.get('JWT_SECRET');
                    console.log('JWT Configuration - Secret:', secret);
                    return {
                        secret: secret,
                        signOptions: { expiresIn: '1h' },
                    };
                },
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, auth_service_1.AuthService, user_service_1.UserService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map