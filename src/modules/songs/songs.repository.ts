import BaseRepository from '@common/BaseRepository';
import Song from '@entities/song';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export default class SongsRepository extends BaseRepository<Song> {
  constructor(@InjectRepository(Song) songRepository: Repository<Song>) {
    super(songRepository);
  }
}
