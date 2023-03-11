import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/controller.module';
import { SpotifyPlaylistController } from './spotify-playlist.controller';

@Module({
  imports: [ControllerModule],
  controllers: [SpotifyPlaylistController]
})
export class SpotifyPlaylistModule {}
