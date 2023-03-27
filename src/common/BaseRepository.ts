import { Repository } from 'typeorm';

export default class BaseRepository<T> extends Repository<T> {
  constructor(repository: Repository<T>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
