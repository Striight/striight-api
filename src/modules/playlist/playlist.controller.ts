import { Body, Controller, Post } from '@nestjs/common';
import { Admin } from '@metadata/roles.metadata';
import { PlaylistService } from './services/playlist.service';
import { Platform } from '@constants/platform';

@Controller('playlist')
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}

  @Post()
  @Admin()
  createPlaylist(@Body() body: { genre: string; platform: Platform }) {
    const { genre, platform } = body;
    this.playlistService.createPlaylist(platform, genre);
  }
}
