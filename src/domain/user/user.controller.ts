import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from '@/domain/user/user.service';
import { CreateUserDto } from '@/domain/user/dto/request/create-user.dto';
import { UserDto } from '@/domain/user/dto/response/user.dto';

@Controller('/api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    await this.userService.create(createUserDto);
  }

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<UserDto> {
    return await this.userService.findById(id);
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    return await this.userService.findAll();
  }

  @Delete('/:id')
  async deleteById(@Param('id') id: number): Promise<void> {
    await this.userService.delete(id);
  }
}
