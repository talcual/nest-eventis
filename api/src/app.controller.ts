import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './services/auth/auth.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService, private configService: ConfigService) {}

  @Get()
  getHello(): string {
    console.log('JWT_SECRET:', this.configService.get<string>('JWT_SECRET'));
    return this.appService.getHello();
  }

  @Post('login')
  async sigIn(@Body() body){
    
    const {username, pass} = body;

    const login = await this.authService.signIn(username, pass);

    if(login)
      return login

  }

}
