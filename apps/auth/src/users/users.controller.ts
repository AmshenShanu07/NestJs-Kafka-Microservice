import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignUpDTO } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  signUp(@Body() data: SignUpDTO) {
    return this.usersService.signUp(data);
  }

  @Post('login')
  login(@Body() data: LoginDto) {
    return this.usersService.login(data);
  }

  @MessagePattern('auth.userByEmail')
  getUserByEmail(@Payload() data: string) {
    return this.usersService.getUserByEmail(data || 'amshen@gmail.com');
  }

  @MessagePattern('auth.allUsers')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
