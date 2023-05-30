import { Repository } from 'typeorm';
import User from '@entities/striight/user';
import BaseRepository from '@common/BaseRepository';
import { InjectStriightRepository } from '@decorators/inject-db-repository';

export default class UsersRepository extends BaseRepository<User> {
  constructor(
    @InjectStriightRepository(User)
    repository: Repository<User>,
  ) {
    super(repository);
  }
}
