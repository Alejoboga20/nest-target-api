import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signup(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      await this.userRepository.save(user);

      return { user };
    } catch (error) {
      console.log(error);
      this.handleDbExceptions(error);
    }
  }

  signin() {
    return `login`;
  }

  logout() {
    return `logout`;
  }

  private handleDbExceptions(error: any) {
    if (error.code === '23502') throw new BadRequestException(error.detail);

    if (error.code === '23505') throw new BadRequestException(error.detail);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
