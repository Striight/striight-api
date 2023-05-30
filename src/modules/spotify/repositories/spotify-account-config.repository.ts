import { Repository } from 'typeorm';
import SpotifyAccountConfig from '@entities/striight/spotify-account-config';
import BaseRepository from '@common/BaseRepository';
import { InjectStriightRepository } from '@decorators/inject-db-repository';

export default class SpotifyAccountConfigRepository extends BaseRepository<SpotifyAccountConfig> {
  constructor(
    @InjectStriightRepository(SpotifyAccountConfig)
    repository: Repository<SpotifyAccountConfig>,
  ) {
    super(repository);
  }
}
