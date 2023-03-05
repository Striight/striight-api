import { Module } from '@nestjs/common';
import UserService from './user.service';
import UserController from './user.controller';
import UserRepository, { typeOrm } from './user.repository';
import { PasswordService } from '../services/password.service';
import AuthService from '../auth/auth.service';
import { TokenService } from '../services/token.service';

@Module({
  imports: [typeOrm],
  providers: [
    UserService,
    UserRepository,
    PasswordService,
    AuthService,
    TokenService,
  ],
  controllers: [UserController],
})
export default class UserModule {}
