import { Module } from '@nestjs/common';
import { PlaylistService } from './services/playlist.service';
import { PlaylistController } from './playlist.controller';
import PlaylistRepository from './repositories/playlist.repository';
import { createTypeOrmModule } from '@utils/typeorm.utils';
import Playlist from '@entities/playlist';

@Module({
  imports: [createTypeOrmModule([Playlist])],
  providers: [PlaylistService, PlaylistRepository],
  controllers: [PlaylistController],
})
export class PlaylistModule {}
