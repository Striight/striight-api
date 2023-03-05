import { Module } from '@nestjs/common';
import AuthService from './auth.service';
import AuthController from './auth.controller';
import UserService from '../user/user.service';
import { ConfigService } from '@nestjs/config';
import { TokenService } from '../services/token.service';
import UserRepository, { typeOrm } from '../user/user.repository';
import { PasswordService } from '../services/password.service';

@Module({
  imports: [typeOrm],
  providers: [
    AuthService,
    UserService,
    ConfigService,
    TokenService,
    UserRepository,
    PasswordService,
    TokenService,
  ],
  controllers: [AuthController],
})
export default class AuthModule {}
