import { Injectable } from '@nestjs/common';
import ArtistAccountRepository from '../repositories/artist-account.repository';
import SpotifyApiService from '../../spotify/services/spotify-api.service';
import ArtistAccount from '@entities/artist-account';
import { SPOTIFY } from '@constants/platform';
import UsersRepository from '@modules/user/repositories/users.repository';
import { extractSpotifyIdFromURI } from '@utils/song-uri.utils';

@Injectable()
export default class ArtistAccountService {
  constructor(
    private readonly artistAccountRepository: ArtistAccountRepository,
    private readonly spotifyApiService: SpotifyApiService,
    private usersRepository: UsersRepository,
  ) {}

  private async linkSpotifyAccount(userId: string, artistURI: string) {
    const artistId = extractSpotifyIdFromURI(artistURI);
    const user = await this.usersRepository.findOneBy({ id: userId });
    try {
      const artistSpotify = await this.spotifyApiService.getArtistById(
        artistId,
      );
      const inDb = await this.artistAccountRepository.findOneBy({
        spotifyId: artistId,
      });
      if (inDb && inDb.user.id !== userId) {
        throw new Error('This artist is already linked to another account');
      }
      if (inDb) {
        throw new Error('This artist is already linked');
      }

      const artistAccount = new ArtistAccount(user);
      artistAccount.spotifyId = artistSpotify.id;

      await this.artistAccountRepository.save(artistAccount);
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  public linkArtistToAccount(userId: string, artistURI: string) {
    if (artistURI.includes('spotify')) {
      return this.linkSpotifyAccount(userId, artistURI);
    }
  }
}
