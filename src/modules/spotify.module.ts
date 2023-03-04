import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpotifyAccountConfig } from '../entities';
import SecretsService from '../services/secrets.service';
import SpotifyApiService from '../services/spotify-api.service';
import SpotifyController from '../controllers/spotify.controller';
import CryptoService from '../services/crypto.service';
import SpotifyAccountConfigRepository from '../repositories/spotify-account-config.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SpotifyAccountConfig])],
  controllers: [SpotifyController],
  providers: [
    SecretsService,
    SpotifyApiService,
    CryptoService,
    SpotifyAccountConfigRepository,
  ],
})
export default class SpotifyModule {}
