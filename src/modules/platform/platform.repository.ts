import BaseRepository from '@common/BaseRepository';
import Platform from '@entities/platform';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export default class PlatformRepository extends BaseRepository<Platform> {
  constructor(@InjectRepository(Platform) repository: Repository<Platform>) {
    super(repository);
  }
}
