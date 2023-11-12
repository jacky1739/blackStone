import { Module, ConsoleLogger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './models/user.entity';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [ConsoleLogger, UserService, UserResolver],
  exports: [UserService], // 必須在這export出去, app.controller才能調用到UserService
})
export class UserModule {}