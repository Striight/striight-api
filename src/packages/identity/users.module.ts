import { Module } from '@nestjs/common';
import UsersService from './users.service';
import UsersRepository, { userTypeOrm } from './users.repository';
import { PasswordService } from './password.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [userTypeOrm],
  providers: [UsersService, UsersRepository, PasswordService, JwtService],
  exports: [UsersService],
})
export default class UsersModule {}
