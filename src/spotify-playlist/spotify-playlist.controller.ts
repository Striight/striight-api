import { Controller, Post } from '@nestjs/common';
import { Admin } from '../metadata/roles.metadata';

@Controller('playlist/spotify')
export class SpotifyPlaylistController {
  @Post()
  @Admin()
  public createPlaylist() {
    return 'ok';
  }
}
