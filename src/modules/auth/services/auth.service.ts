import { Injectable, UnauthorizedException } from '@nestjs/common';
import UsersService from '@modules/user/services/users.service';
import { PasswordService } from '@modules/core/services/password.service';
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
      user == null ||
      !(await this.passwordService.verifyPassword(password, user?.password))
    ) {
      throw new UnauthorizedException('Wrong credentials');
    }
    return user;
  }
}
