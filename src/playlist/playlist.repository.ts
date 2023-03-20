import { Repository } from 'typeorm';
import { Playlist } from '../entities';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

export default class PlaylistRepository extends Repository<Playlist> {
  constructor(
    @InjectRepository(Playlist)
    repository: Repository<Playlist>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}

export const playlistTypeOrm = TypeOrmModule.forFeature([Playlist]);
