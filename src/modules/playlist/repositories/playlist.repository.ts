import { Repository } from 'typeorm';
import Playlist from '@entities/playlist';
import { InjectRepository } from '@nestjs/typeorm';
import BaseRepository from '@common/BaseRepository';

export default class PlaylistRepository extends BaseRepository<Playlist> {
  constructor(
    @InjectRepository(Playlist)
    repository: Repository<Playlist>,
  ) {
    super(repository);
  }
}
