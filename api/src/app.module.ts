import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from './v1/v1.module';
import { V2Module } from './v2/v2.module';
import { V3Module } from './v3/v3.module';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: '.env'
    }),
    V1Module,
    V2Module,
    RouterModule.register([
      {
        path:'v1',
        module: V1Module
      },
      {
        path: 'v2',
        module: V2Module
      }
    ]),
    V3Module,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');
        console.log('JWT Configuration - Secret:', secret);
        return {
          secret: secret,
          signOptions: { expiresIn: '1h' },
        };
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, UserService],
})
export class AppModule {}
