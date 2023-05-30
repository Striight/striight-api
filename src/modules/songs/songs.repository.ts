import BaseRepository from '@common/BaseRepository';
import Song from '@entities/striight/song';
import { Repository } from 'typeorm';
import { InjectStriightRepository } from '@decorators/inject-db-repository';

export default class SongsRepository extends BaseRepository<Song> {
  constructor(
    @InjectStriightRepository(Song) songRepository: Repository<Song>,
  ) {
    super(songRepository);
  }
}
