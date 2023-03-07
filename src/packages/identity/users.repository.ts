import { Repository } from 'typeorm';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import User from './user';

export default class UsersRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    repository: Repository<User>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}

export const userTypeOrm = TypeOrmModule.forFeature([User]);
