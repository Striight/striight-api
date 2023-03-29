import { Module } from '@nestjs/common';
import { PlaylistService } from './services/playlist.service';
import { PlaylistController } from './playlist.controller';
import PlaylistRepository from './repositories/playlist.repository';
import { createTypeOrmModule } from '@utils/typeorm.utils';
import Playlist from '@entities/playlist';
import SpotifyModule from '@modules/spotify/spotify.module';

@Module({
  imports: [createTypeOrmModule([Playlist]), SpotifyModule],
  providers: [PlaylistService, PlaylistRepository],
  controllers: [PlaylistController],
})
export class PlaylistModule {}
