import { Injectable } from '@nestjs/common';
import ArtistAccountRepository from './artist-account.repository';
import SpotifyApiService from '../spotify/spotify-api.service';
import { ArtistAccount } from '../entities';
import { use } from 'passport';

@Injectable()
export default class ArtistAccountService {
  constructor(
    private readonly artistAccountRepository: ArtistAccountRepository,
    private readonly spotifyApiService: SpotifyApiService,
  ) {}

  private async linkSpotifyAccount(userId: string, artistURI: string) {
    const split = artistURI.split('/');
    const artistId = split[split.length - 1];
    try {
      const artist = await this.spotifyApiService.getArtistById(artistId);
      const inDb = await this.artistAccountRepository.findOneBy({
        spotifyId: artistId,
      });
      if (inDb && inDb.userId !== userId) {
        throw new Error('This artist is already linked to another account');
      }
      if (inDb) {
        throw new Error('This artist is already linked');
      }

      const artistAccount = new ArtistAccount(userId);
      artistAccount.spotifyId = artist.id;

      await this.artistAccountRepository.save(artistAccount);
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  public linkArtistToAccount(userId: string, artistURI: string) {
    if (artistURI.includes('spotify.com')) {
      return this.linkSpotifyAccount(userId, artistURI);
    }
  }
}
