import BaseRepository from '@common/BaseRepository';
import Platform from '@entities/striight/platform';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { STRIIGHT_DB } from '@constants/database';

export default class PlatformRepository extends BaseRepository<Platform> {
  constructor(
    @InjectRepository(Platform, STRIIGHT_DB) repository: Repository<Platform>,
  ) {
    super(repository);
  }
}
