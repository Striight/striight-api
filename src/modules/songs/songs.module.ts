import { Module } from '@nestjs/common';
import { SongsService } from './services/songs.service';
import { SongsController } from './songs.controller';
import ArtistAccountRepository from '@modules/artist/repositories/artist-account.repository';
import { createStriightTypeOrmModule } from '@utils/typeorm.utils';
import ArtistAccount from '@entities/striight/artist-account';
import Song from '@entities/striight/song';
import SongsRepository from '@modules/songs/songs.repository';
import SpotifyModule from '@modules/spotify/spotify.module';
import UsersModule from '@modules/user/users.module';

@Module({
  imports: [
    createStriightTypeOrmModule([ArtistAccount, Song]),
    SpotifyModule,
    UsersModule,
  ],
  providers: [SongsService, ArtistAccountRepository, SongsRepository],
  controllers: [SongsController],
})
export class SongsModule {}
