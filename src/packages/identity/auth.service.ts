import { Injectable, UnauthorizedException } from '@nestjs/common';
import UsersService from './users.service';
import { PasswordService } from './password.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export default class AuthService {
  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (
      !(await this.passwordService.verifyPassword(password, user?.password))
    ) {
      throw new UnauthorizedException('Wrong credentials');
    }
    return user;
  }
}
