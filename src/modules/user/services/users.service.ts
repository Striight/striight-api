import { Injectable } from '@nestjs/common';
import User from '@entities/user';
import UsersRepository from '../repositories/users.repository';
import { PasswordService } from '@modules/core/services/password.service';
import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET } from '@constants/jwt';

@Injectable()
export default class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({
      username,
    });
  }

  async signToken(user: User) {
    return this.jwtService.sign(
      {
        username: user.username,
        sub: user.id,
        isAdmin: user.isAdmin,
      },
      {
        secret: JWT_SECRET,
      },
    );
  }

  async registerUser(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersRepository.save(
      new User(username, await this.passwordService.hashPassword(password)),
    );
    return {
      access_token: await this.signToken(user),
    };
  }
}
