import BaseRepository from '@common/BaseRepository';
import QueuedSong from '@entities/queued-song';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export default class QueuedSongsRepository extends BaseRepository<QueuedSong> {
  constructor(
    @InjectRepository(QueuedSong) queuedSong: Repository<QueuedSong>,
  ) {
    super(queuedSong);
  }
}
