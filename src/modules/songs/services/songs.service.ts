import { Injectable } from '@nestjs/common';
import RegisterSongDTO from '@modules/songs/dtos/RegisterSongDTO';
import ArtistAccountRepository from '@modules/artist/repositories/artist-account.repository';
import NoArtistException from '@exceptions/NoArtistException';
import SongsRepository from '@modules/songs/songs.repository';
import { RuntimeException } from '@nestjs/core/errors/exceptions';
import Song from '@entities/striight/song';
import { extractSpotifyIdFromURI, identifyUri } from '@utils/song-uri.utils';
import { Platform, SPOTIFY } from '@constants/platform';
import ArtistAccount from '@entities/striight/artist-account';
import SpotifyApiService from '@modules/spotify/services/spotify-api.service';
import User from '@entities/striight/user';
import UsersService from '@modules/user/services/users.service';

@Injectable()
export class SongsService {
  constructor(
    private artistAccountRepository: ArtistAccountRepository,
    private songsRepository: SongsRepository,
    private spotifyApi: SpotifyApiService,
    private userService: UsersService,
  ) {}

  private async exists(songId: string, platform: Platform) {
    switch (platform) {
      case SPOTIFY:
        return !!(await this.songsRepository.findOneBy({
          spotifyId: songId,
        }));
      default:
        return false;
    }
  }

  private async registerSpotifySong(uri: string, artist: ArtistAccount) {
    const songId = extractSpotifyIdFromURI(uri);
    if (await this.exists(songId, SPOTIFY)) {
      throw new RuntimeException('Song already exists');
    }
    const song = await this.spotifyApi.getSongIfRightArtist(
      songId,
      artist.spotifyId,
    );
    const editedSong =
      (await this.songsRepository.findOneBy({
        name: song.name,
      })) || new Song(song.name);
    editedSong.spotifyId = song.id;
    editedSong.artist = artist;
    await this.songsRepository.save(editedSong);
  }

  public async registerSong(dto: RegisterSongDTO, userId: string) {
    const user = await this.userService.findById(userId);
    const artists = await user.artists;
    const artist = artists.find(({ id }) => dto.artistId === id);
    const platform = identifyUri(dto.songURI);
    switch (platform) {
      case SPOTIFY:
        await this.registerSpotifySong(dto.songURI, artist);
        break;
      default:
        throw new RuntimeException('No platform identified');
    }
  }
}
