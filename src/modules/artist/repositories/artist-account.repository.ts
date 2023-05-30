import { Repository } from 'typeorm';
import ArtistAccount from '@entities/striight/artist-account';
import BaseRepository from '@common/BaseRepository';
import { InjectStriightRepository } from '@decorators/inject-db-repository';

export default class ArtistAccountRepository extends BaseRepository<ArtistAccount> {
  constructor(
    @InjectStriightRepository(ArtistAccount)
    repository: Repository<ArtistAccount>,
  ) {
    super(repository);
  }
}
