import { Module } from '@nestjs/common';
import { PlaylistService } from './services/playlist.service';
import { PlaylistController } from './playlist.controller';
import PlaylistRepository from './repositories/playlist.repository';
import { createStriightTypeOrmModule } from '@utils/typeorm.utils';
import Playlist from '@entities/striight/playlist';
import SpotifyModule from '@modules/spotify/spotify.module';
import { PlatformModule } from '@modules/platform/platform.module';

@Module({
  imports: [
    createStriightTypeOrmModule([Playlist]),
    SpotifyModule,
    PlatformModule,
  ],
  providers: [PlaylistService, PlaylistRepository],
  controllers: [PlaylistController],
})
export class PlaylistModule {}
