import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(3, 20)
  username: string;

  @IsString()
  @Length(6, 30)
  password: string;
}
