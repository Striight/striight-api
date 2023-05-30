import { Module } from '@nestjs/common';
import ArtistAccountRepository from './repositories/artist-account.repository';
import ArtistAccountService from './services/artist-account.service';
import ArtistAccountController from './artist-account.controller';
import SpotifyModule from '../spotify/spotify.module';
import { createStriightTypeOrmModule } from '@utils/typeorm.utils';
import ArtistAccount from '@entities/striight/artist-account';
import User from '@entities/striight/user';
import UsersRepository from '@modules/user/repositories/users.repository';

@Module({
  providers: [ArtistAccountRepository, ArtistAccountService, UsersRepository],
  controllers: [ArtistAccountController],
  imports: [createStriightTypeOrmModule([ArtistAccount, User]), SpotifyModule],
})
export default class ArtistAccountModule {}
