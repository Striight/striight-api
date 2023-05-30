import BaseRepository from '@common/BaseRepository';
import { ArtistsCurrentData } from '@entities/extriight';
import { InjectExtriightRepository } from '@decorators/inject-db-repository';

export default class ArtistsCurrentDataRepository extends BaseRepository<ArtistsCurrentData> {
  constructor(
    @InjectExtriightRepository(ArtistsCurrentData) artistCurrentData,
  ) {
    super(artistCurrentData);
  }
}
