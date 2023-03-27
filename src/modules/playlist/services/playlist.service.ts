import { Injectable } from '@nestjs/common';
import { Platform } from '@constants/platform';
import PlaylistRepository from '../repositories/playlist.repository';
import Playlist from '@entities/playlist';

@Injectable()
export class PlaylistService {
  constructor(private playlistRepository: PlaylistRepository) {}

  async createPlaylist(platform: Platform, genre: string) {
    const playlist = new Playlist(platform, genre);
    playlist.genres = [genre];
    await this.playlistRepository.save(playlist);
  }
}
