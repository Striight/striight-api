import { Injectable, UnauthorizedException } from '@nestjs/common';
import UserService from '../user/user.service';
import { TokenService } from '../services/token.service';
import User from '../user/user.entity';
import { PasswordService } from '../services/password.service';

@Injectable()
export default class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
    private readonly passwordService: PasswordService,
  ) {}

  public async genTokenForUserId(userId: number) {
    const user = await this.userService.getUserById(userId);
    return this.genTokenForUser(user);
  }

  public async genTokenForEmail(email: string) {
    const user = await this.userService.getUserByEmail(email);
    return this.genTokenForUser(user);
  }

  public genTokenForUser(user: User) {
    return this.tokenService.signToken({
      id: user.id,
      email: user.email,
    });
  }

  public async validateUser(email: string, password: string) {
    const user = await this.userService.getUserByEmail(email);
    if (user == null) {
      throw new UnauthorizedException();
    }
    const result = await this.passwordService.verifyPassword(
      password,
      user.password,
    );
    if (!result) {
      throw new UnauthorizedException();
    }
  }
}
