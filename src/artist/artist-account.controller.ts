import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../packages/identity/jwt-auth.guard';
import ArtistAccountService from './artist-account.service';

@Controller('/artist-account')
export default class ArtistAccountController {
  constructor(private artistAccountService: ArtistAccountService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/link')
  async linkArtistToAccount(@Request() req, @Body() body) {
    await this.artistAccountService.linkArtistToAccount(
      req.user.userId,
      body.uri,
    );
  }
}
