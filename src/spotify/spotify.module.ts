import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpotifyAccountConfig } from '../entities';
import SpotifyApiService from './spotify-api.service';
import SpotifyController from './spotify.controller';
import SpotifyAccountConfigRepository from './spotify-account-config.repository';
import CoreModule from '../core/core.module';

@Module({
  imports: [TypeOrmModule.forFeature([SpotifyAccountConfig]), CoreModule],
  controllers: [SpotifyController],
  providers: [SpotifyApiService, SpotifyAccountConfigRepository],
  exports: [SpotifyApiService],
})
export default class SpotifyModule {}
