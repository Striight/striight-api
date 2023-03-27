import { Module } from '@nestjs/common';
import SecretsService from './services/secrets.service';
import CryptoService from './services/crypto.service';
import { PasswordService } from './services/password.service';

@Module({
  imports: [],
  providers: [SecretsService, CryptoService, PasswordService],
  exports: [SecretsService, CryptoService, PasswordService],
})
export default class CoreModule {}
