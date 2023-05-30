import BaseRepository from '@common/BaseRepository';
import QueuedSong from '@entities/striight/queued-song';
import { Repository } from 'typeorm';
import { InjectStriightRepository } from '@decorators/inject-db-repository';

export default class QueuedSongsRepository extends BaseRepository<QueuedSong> {
  constructor(
    @InjectStriightRepository(QueuedSong)
    queuedSong: Repository<QueuedSong>,
  ) {
    super(queuedSong);
  }
}
