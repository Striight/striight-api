import { Module } from '@nestjs/common';
import SecretsService from './services/secrets.service';
import CryptoService from './services/crypto.service';

@Module({
  providers: [SecretsService, CryptoService],
  exports: [SecretsService, CryptoService],
})
export default class CoreModule {}
