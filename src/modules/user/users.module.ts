import { Module } from '@nestjs/common';
import UsersService from './services/users.service';
import UsersRepository from './repositories/users.repository';
import { JwtService } from '@nestjs/jwt';
import CoreModule from '@modules/core/core.module';
import { createTypeOrmModule } from '@utils/typeorm.utils';
import User from '@entities/user';

@Module({
  imports: [createTypeOrmModule([User]), CoreModule],
  providers: [UsersService, UsersRepository, JwtService],
  exports: [UsersService],
})
export default class UsersModule {}
