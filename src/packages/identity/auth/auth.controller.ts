import { Body, Controller, Get, Post } from '@nestjs/common';
import AuthService from './auth.service';
import { LoginBody } from '../types';

@Controller('/auth')
export default class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/login')
  public async login(@Body() body: LoginBody) {
    const { email, password } = body;
    await this.authService.validateUser(email, password);
    return await this.authService.genTokenForEmail(email);
  }
}
