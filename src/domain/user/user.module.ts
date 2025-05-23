import { Module } from '@nestjs/common';
import { UserController } from '@/domain/user/user.controller';
import { UserService } from '@/domain/user/user.service';
import { UserRepository } from '@/domain/user/user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
