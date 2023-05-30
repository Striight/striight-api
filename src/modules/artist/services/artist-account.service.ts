import { HttpException, Injectable } from '@nestjs/common';
import ArtistAccountRepository from '../repositories/artist-account.repository';
import SpotifyApiService from '../../spotify/services/spotify-api.service';
import ArtistAccount from '@entities/striight/artist-account';
import UsersRepository from '@modules/user/repositories/users.repository';
import { extractSpotifyIdFromURI } from '@utils/song-uri.utils';
import { Log } from '../../../log';

@Injectable()
export default class ArtistAccountService {
  private readonly log = new Log(ArtistAccountService.name);

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
        throw new HttpException(
          'This artist is already linked to another account',
          400,
        );
      }
      if (inDb) {
        throw new HttpException('This artist is already linked', 400);
      }

      const artistAccount = new ArtistAccount(user);
      artistAccount.spotifyId = artistSpotify.id;

      await this.artistAccountRepository.save(artistAccount);
    } catch (e) {
      this.log.error(e);
      throw e;
    }
  }

  public linkArtistToAccount(userId: string, artistURI: string) {
    if (artistURI.includes('spotify')) {
      return this.linkSpotifyAccount(userId, artistURI);
    }
  }
}
