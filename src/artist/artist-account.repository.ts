import { Repository } from 'typeorm';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import ArtistAccount from '../entities/artist-account';

export default class ArtistAccountRepository extends Repository<ArtistAccount> {
  constructor(
    @InjectRepository(ArtistAccount)
    repository: Repository<ArtistAccount>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}

export const artistAccountTypeOrm = TypeOrmModule.forFeature([ArtistAccount]);
