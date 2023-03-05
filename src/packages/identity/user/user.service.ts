import { Injectable } from '@nestjs/common';
import UserRepository from './user.repository';
import UserEntity from './user.entity';
import { PasswordService } from '../services/password.service';

@Injectable()
export default class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
  ) {}

  public async getUserByEmail(email: string) {
    return await this.userRepository.findOneBy({
      email,
    });
  }

  public async getUserById(id: number) {
    return await this.userRepository.findOneBy({
      id,
    });
  }

  public async registerUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) {
    return await this.userRepository.save(
      new UserEntity(
        email,
        await this.passwordService.hashPassword(password),
        firstName,
        lastName,
      ),
    );
  }
}
