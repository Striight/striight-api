import { Module } from '@nestjs/common';
import ArtistAccountRepository from './repositories/artist-account.repository';
import ArtistAccountService from './services/artist-account.service';
import ArtistAccountController from './artist-account.controller';
import SpotifyModule from '../spotify/spotify.module';
import { createTypeOrmModule } from '@utils/typeorm.utils';
import ArtistAccount from '@entities/artist-account';

@Module({
  providers: [ArtistAccountRepository, ArtistAccountService],
  controllers: [ArtistAccountController],
  imports: [createTypeOrmModule([ArtistAccount]), SpotifyModule],
})
export default class ArtistAccountModule {}
