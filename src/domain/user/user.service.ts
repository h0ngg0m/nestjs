import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '@/domain/user/user.repository';
import { CreateUserDto } from '@/domain/user/dto/request/create-user.dto';
import { UserDto } from '@/domain/user/dto/response/user.dto';
import { User } from '@/domain/user/user';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    await this.userRepository.create(
      createUserDto.email,
      createUserDto.username,
      createUserDto.password,
    );
  }

  async findById(id: number): Promise<UserDto> {
    const user: User | null = await this.userRepository.findById(id);
    if (user) {
      return new UserDto(user);
    }
    throw new NotFoundException('User not found');
  }

  async findAll(): Promise<UserDto[]> {
    return await this.userRepository.findAll();
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
