import UserEntity from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

export default class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    repository: Repository<UserEntity>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}

export const typeOrm = TypeOrmModule.forFeature([UserEntity]);
