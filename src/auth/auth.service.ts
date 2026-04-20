import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterUserDto } from '../dto/allDTO';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async register(registerUserDto: RegisterUserDto): Promise<any> {
    console.log('Register DTO', registerUserDto);
    const salt = 10;
    const HashPassword = await bcrypt.hash(registerUserDto.password, salt);
    return this.userService.registerUser({
      ...registerUserDto,
      password: HashPassword,
    });
  }
}
