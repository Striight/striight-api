import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import UsersService from './users.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('/auth')
export default class AuthController {
  constructor(private usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    const { user } = req;
    return {
      access_token: await this.usersService.signToken(user),
    };
  }

  @Post('register')
  async register(@Body() { username, password }: { username; password }) {
    return await this.usersService.registerUser(username, password);
  }
}
