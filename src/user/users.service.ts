import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  signup(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);

    return createUserDto;
  }

  signin() {
    return `login`;
  }

  logout() {
    return `logout`;
  }
}
