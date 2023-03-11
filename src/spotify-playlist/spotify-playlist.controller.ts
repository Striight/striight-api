import { Controller, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../core/guards/roles.guard';

@Controller('spotify-playlist')
export class SpotifyPlaylistController {
  @Post()
  @UseGuards(RolesGuard)
  public createPlaylist() {
    return 'ok';
  }
}
