"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Module = void 0;
const common_1 = require("@nestjs/common");
const eventos_controller_1 = require("./eventos/eventos.controller");
const eventos_service_1 = require("./eventos/services/eventos.service");
const ciudad_controller_1 = require("./ciudad/ciudad.controller");
const user_service_1 = require("../services/user/user.service");
const auth_service_1 = require("../services/auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../strategies/jwt.strategy");
let V1Module = class V1Module {
};
exports.V1Module = V1Module;
exports.V1Module = V1Module = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [eventos_controller_1.EventosController, ciudad_controller_1.CiudadController],
        providers: [
            eventos_service_1.EventoService,
            user_service_1.UserService,
            auth_service_1.AuthService,
            jwt_1.JwtService,
            jwt_strategy_1.JwtStrategy
        ]
    })
], V1Module);
//# sourceMappingURL=v1.module.js.map