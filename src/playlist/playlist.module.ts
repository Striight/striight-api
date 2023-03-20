import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import PlaylistRepository, { playlistTypeOrm } from './playlist.repository';

@Module({
  imports: [playlistTypeOrm],
  providers: [PlaylistService, PlaylistRepository],
  controllers: [PlaylistController],
})
export class PlaylistModule {}
