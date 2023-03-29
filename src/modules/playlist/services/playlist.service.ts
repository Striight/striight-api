import { Injectable } from '@nestjs/common';
import PlaylistRepository from '../repositories/playlist.repository';
import Playlist from '@entities/playlist';
import SpotifyApiService from '@modules/spotify/services/spotify-api.service';

@Injectable()
export class PlaylistService {
  constructor(
    private playlistRepository: PlaylistRepository,
    private spotifyApi: SpotifyApiService,
  ) {}

  async createPlaylist(genre: string, name: string) {
    const playlist = new Playlist(genre);
    playlist.genres = [genre];
    playlist.name = name;
    const playlistSpotify = await this.spotifyApi.createPlaylist(name);
    playlist.spotifyId = playlistSpotify.id;
    await this.playlistRepository.save(playlist);
  }
}
