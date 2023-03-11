import { Module } from '@nestjs/common';
import SecretsService from './services/secrets.service';
import CryptoService from './services/crypto.service';
import { RolesGuard } from './guards/roles.guard';
import UsersModule from '../packages/identity/users.module';

@Module({
  imports: [UsersModule],
  providers: [SecretsService, CryptoService, RolesGuard],
  exports: [SecretsService, CryptoService, RolesGuard],
})
export default class CoreModule {}
