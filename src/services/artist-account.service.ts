import { Injectable } from '@nestjs/common';
import ArtistAccountRepository from '../repositories/artist-account.repository';

@Injectable()
export default class ArtistAccountService {
  constructor(
    private readonly artistAccountRepository: ArtistAccountRepository,
  ) {}

  public linkArtistToAccount(userId: number, artistURI: string) {}
}
