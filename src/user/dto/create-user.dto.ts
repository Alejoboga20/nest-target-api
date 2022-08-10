import { IsEmail, IsIn, IsString, Matches, MinLength } from 'class-validator';
import { Match } from '../../common/decorators';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @MinLength(5)
  email: string;

  @IsString()
  @Matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
  password: string;

  @IsString()
  @MinLength(5)
  username: string;

  @IsIn(['male', 'female', 'other'])
  gender: string;

  @IsString()
  @Match('password')
  password_confirmation: string;
}
