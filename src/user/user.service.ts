import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/dto/allDTO';

@Injectable()
export class UserService {
  registerUser(registerUserDto: RegisterUserDto): any {
    console.log('User', registerUserDto);
    // return registerUserDto;
    return { userCreated: 'user created Successfully' };
  }
}
