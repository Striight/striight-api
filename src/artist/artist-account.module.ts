import { Module } from '@nestjs/common';
import ArtistAccountRepository, {
  artistAccountTypeOrm,
} from './artist-account.repository';
import ArtistAccountService from './artist-account.service';
import ArtistAccountController from './artist-account.controller';
import SpotifyModule from '../spotify/spotify.module';

@Module({
  providers: [ArtistAccountRepository, ArtistAccountService],
  controllers: [ArtistAccountController],
  imports: [artistAccountTypeOrm, SpotifyModule],
})
export default class ArtistAccountModule {}
