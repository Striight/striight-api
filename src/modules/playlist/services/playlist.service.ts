import { Injectable } from '@nestjs/common';
import PlaylistRepository from '../repositories/playlist.repository';
import Playlist from '@entities/striight/playlist';
import SpotifyApiService from '@modules/spotify/services/spotify-api.service';
import { PlatformService } from '@modules/platform/platform.service';
import { SPOTIFY } from '@constants/platform';

@Injectable()
export class PlaylistService {
  constructor(
    private playlistRepository: PlaylistRepository,
    private spotifyApi: SpotifyApiService,
    private platformService: PlatformService,
  ) {}

  async createPlaylist(genre: string, name: string) {
    const playlist = new Playlist(genre);
    const spotifyPlatform = await this.platformService.getPlatform(SPOTIFY);
    playlist.genres = [genre];
    playlist.name = name;
    const playlistSpotify = await this.spotifyApi.createPlaylist(name);
    playlist.platformPlaylistId = playlistSpotify.id;
    playlist.platform = spotifyPlatform;
    await this.playlistRepository.save(playlist);
  }
}
