import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from './v1/v1.module';
import { V2Module } from './v2/v2.module';
import { V3Module } from './v3/v3.module';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { UsersResolver } from './resolvers/users/users.resolver';
import { RealtimeModule } from './realtime/realtime.module';

@Module({
  imports: [
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
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: '.env'
    }),
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
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'), // genera el esquema automáticamente
      playground: true, // habilita la consola interactiva
    }),
    RealtimeModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, UserService, UsersResolver],
})
export class AppModule {}
