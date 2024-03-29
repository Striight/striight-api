import { Module } from '@nestjs/common';
import { SpotifyAccountConfig } from '@entities/striight';
import SpotifyApiService from './services/spotify-api.service';
import SpotifyController from './spotify.controller';
import SpotifyAccountConfigRepository from './repositories/spotify-account-config.repository';
import CoreModule from '@modules/core/core.module';
import { createStriightTypeOrmModule } from '@utils/typeorm.utils';

@Module({
  imports: [createStriightTypeOrmModule([SpotifyAccountConfig]), CoreModule],
  controllers: [SpotifyController],
  providers: [SpotifyApiService, SpotifyAccountConfigRepository],
  exports: [SpotifyApiService],
})
export default class SpotifyModule {}
