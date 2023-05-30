import { Repository } from 'typeorm';
import Playlist from '@entities/striight/playlist';
import BaseRepository from '@common/BaseRepository';
import { InjectStriightRepository } from '@decorators/inject-db-repository';

export default class PlaylistRepository extends BaseRepository<Playlist> {
  constructor(
    @InjectStriightRepository(Playlist)
    repository: Repository<Playlist>,
  ) {
    super(repository);
  }
}
