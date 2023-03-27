import { Repository } from 'typeorm';
import SpotifyAccountConfig from '@entities/spotify-account-config';
import { InjectRepository } from '@nestjs/typeorm';
import BaseRepository from '@common/BaseRepository';

export default class SpotifyAccountConfigRepository extends BaseRepository<SpotifyAccountConfig> {
  constructor(
    @InjectRepository(SpotifyAccountConfig)
    repository: Repository<SpotifyAccountConfig>,
  ) {
    super(repository);
  }
}
