import { Module } from '@nestjs/common';
import { SpotifyPlaylistController } from './spotify-playlist.controller';

@Module({
  controllers: [SpotifyPlaylistController],
})
export class SpotifyPlaylistModule {}
