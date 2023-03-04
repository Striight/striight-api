import { Repository } from 'typeorm';
import { SpotifyAccountConfig } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';

export default class SpotifyAccountConfigRepository extends Repository<SpotifyAccountConfig> {
  constructor(
    @InjectRepository(SpotifyAccountConfig)
    repository: Repository<SpotifyAccountConfig>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
