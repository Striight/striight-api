import { Controller, Post, Request, Body } from '@nestjs/common';
import ArtistAccountService from './artist-account.service';

@Controller('/artist-account')
export default class ArtistAccountController {
  constructor(private artistAccountService: ArtistAccountService) {}

  @Post('/link')
  async linkArtistToAccount(@Request() req, @Body() body) {
    await this.artistAccountService.linkArtistToAccount(
      req.user.userId,
      body.uri,
    );
  }
}
