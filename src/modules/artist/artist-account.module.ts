import { Module } from '@nestjs/common';
import ArtistAccountRepository from './repositories/artist-account.repository';
import ArtistAccountService from './services/artist-account.service';
import ArtistAccountController from './artist-account.controller';
import SpotifyModule from '../spotify/spotify.module';
import { createTypeOrmModule } from '@utils/typeorm.utils';
import ArtistAccount from '@entities/artist-account';
import User from '@entities/user';
import UsersRepository from '@modules/user/repositories/users.repository';

@Module({
  providers: [ArtistAccountRepository, ArtistAccountService, UsersRepository],
  controllers: [ArtistAccountController],
  imports: [createTypeOrmModule([ArtistAccount, User]), SpotifyModule],
})
export default class ArtistAccountModule {}
