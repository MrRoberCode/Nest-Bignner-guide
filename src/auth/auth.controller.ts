import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from '../dto/allDTO';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto): any {
    return this.authService.register(registerUserDto);
  }
}
