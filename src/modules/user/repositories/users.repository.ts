import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import User from '@entities/user';
import BaseRepository from '@common/BaseRepository';

export default class UsersRepository extends BaseRepository<User> {
  constructor(
    @InjectRepository(User)
    repository: Repository<User>,
  ) {
    super(repository);
  }
}
