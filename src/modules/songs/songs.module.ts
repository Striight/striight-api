import { Module } from '@nestjs/common';
import { SongsService } from './services/songs.service';
import { SongsController } from './songs.controller';
import ArtistAccountRepository from '@modules/artist/repositories/artist-account.repository';
import { createTypeOrmModule } from '@utils/typeorm.utils';
import ArtistAccount from '@entities/artist-account';
import Song from '@entities/song';
import SongsRepository from '@modules/songs/songs.repository';

@Module({
  imports: [createTypeOrmModule([ArtistAccount, Song])],
  providers: [SongsService, ArtistAccountRepository, SongsRepository],
  controllers: [SongsController],
})
export class SongsModule {}
