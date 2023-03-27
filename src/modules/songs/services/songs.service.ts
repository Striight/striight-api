import { Injectable } from '@nestjs/common';
import RegisterSongDTO from '@modules/songs/dtos/RegisterSongDTO';
import ArtistAccountRepository from '@modules/artist/repositories/artist-account.repository';
import NoArtistException from '@exceptions/NoArtistException';
import SongsRepository from '@modules/songs/songs.repository';
import { RuntimeException } from '@nestjs/core/errors/exceptions';
import Song from '@entities/song';

@Injectable()
export class SongsService {
  constructor(
    private artistAccountRepository: ArtistAccountRepository,
    private songsRepository: SongsRepository,
  ) {}

  public async registerSong(dto: RegisterSongDTO) {
    const artist = await this.artistAccountRepository.findOneBy({
      id: dto.artistId,
    });
    if (artist == null) {
      throw new NoArtistException();
    }
    const song = await this.songsRepository.findOneBy({
      uri: dto.songURI,
    });
    if (song != null) {
      throw new RuntimeException('Song already exists');
    }
    const newSong = new Song();
    newSong.uri = dto.songURI;
    newSong.artist = artist;
    await this.songsRepository.save(newSong);
    //TODO fetch additional data from the song
  }
}
