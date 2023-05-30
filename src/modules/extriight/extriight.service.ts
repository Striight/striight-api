import { Injectable } from '@nestjs/common';
import ArtistsCurrentDataRepository from '@modules/extriight/artists-current-data.repository';

@Injectable()
export class ExtriightService {
  constructor(
    private readonly artistCurrentDataRepository: ArtistsCurrentDataRepository,
  ) {}

  public getEligibleArtists() {
    return this.artistCurrentDataRepository.find({
      take: 50,
    });
  }
}
