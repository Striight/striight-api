import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import UsersService from '../user/services/users.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from '@metadata/public.metadata';
import RegisterDTO from './dtos/RegisterDTO';

@Controller('/auth')
export default class AuthController {
  constructor(private usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('/login')
  async login(@Request() req) {
    const { user } = req;
    return {
      access_token: await this.usersService.signToken(user),
    };
  }

  @Public()
  @Post('register')
  async register(@Body() { username, password }: RegisterDTO) {
    return await this.usersService.registerUser(username, password);
  }
}
