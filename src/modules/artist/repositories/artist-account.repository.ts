import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import ArtistAccount from '@entities/artist-account';
import BaseRepository from '@common/BaseRepository';

export default class ArtistAccountRepository extends BaseRepository<ArtistAccount> {
  constructor(
    @InjectRepository(ArtistAccount)
    repository: Repository<ArtistAccount>,
  ) {
    super(repository);
  }
}
