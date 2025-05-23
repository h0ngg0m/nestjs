import { Module } from '@nestjs/common';
import { UserModule } from '@/domain/user/user.module';
import { DatabaseModule } from '@/common/db/database.module';

@Module({
  imports: [UserModule, DatabaseModule],
})
export class AppModule {}
