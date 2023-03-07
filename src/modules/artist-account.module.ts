import { Module } from '@nestjs/common';
import ArtistAccountRepository, {
  artistAccountTypeOrm,
} from '../repositories/artist-account.repository';
import ArtistAccountService from '../services/artist-account.service';
import ArtistAccountController from '../controllers/artist-account.controller';

@Module({
  providers: [ArtistAccountRepository, ArtistAccountService],
  controllers: [ArtistAccountController],
  imports: [artistAccountTypeOrm],
})
export default class ArtistAccountModule {}
