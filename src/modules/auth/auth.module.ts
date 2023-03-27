import { Module } from '@nestjs/common';
import { PasswordService } from '../core/services/password.service';
import UsersModule from '../user/users.module';
import AuthService from './services/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import AuthController from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.stategy';
import { JWT_SECRET } from '@constants/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, PasswordService, JwtStrategy],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
})
export default class AuthModule {}
