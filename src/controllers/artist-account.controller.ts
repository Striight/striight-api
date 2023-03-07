import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../packages/identity/jwt-auth.guard';

@Controller('/artist-account')
export default class ArtistAccountController {
  @UseGuards(JwtAuthGuard)
  @Post('/link')
  linkArtistToAccount(@Request() req, @Body() body) {
    console.log(req.user);
    console.log(body);
  }
}
