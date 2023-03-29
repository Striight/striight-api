import { Body, Controller, Post } from '@nestjs/common';
import { Admin } from '@metadata/roles.metadata';
import { PlaylistService } from './services/playlist.service';
import CreatePlaylistDto from '@modules/playlist/dto/create-playlist-dto';

@Controller('playlist')
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}

  @Post()
  @Admin()
  createPlaylist(@Body() body: CreatePlaylistDto) {
    const { genre, name } = body;
    return this.playlistService.createPlaylist(genre, name);
  }
}
