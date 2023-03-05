import { Body, Controller, Post } from '@nestjs/common';
import { RegisterBody } from '../types';
import UserService from './user.service';
import AuthService from '../auth/auth.service';

@Controller('/user')
export default class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('/register')
  public async register(@Body() body: RegisterBody) {
    const { firstName, lastName, email, password } = body;
    const user = await this.userService.registerUser(
      email,
      password,
      firstName,
      lastName,
    );
    return this.authService.genTokenForUser(user);
  }
}
