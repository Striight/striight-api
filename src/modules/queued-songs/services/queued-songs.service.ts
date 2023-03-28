import { Injectable } from '@nestjs/common';
import QueueSongDTO from '@modules/queued-songs/dtos/QueueSongDTO';
import QueuedSongsRepository from '@modules/queued-songs/repositories/queued-songs.repository';
import UsersRepository from '@modules/user/repositories/users.repository';
import ArtistAccountRepository from '@modules/artist/repositories/artist-account.repository';
import { RuntimeException } from '@nestjs/core/errors/exceptions';
import SongsRepository from '@modules/songs/songs.repository';

@Injectable()
export class QueuedSongsService {
  constructor(
    private queuedSongsRepository: QueuedSongsRepository,
    private usersRepository: UsersRepository,
    private artistAccountRepository: ArtistAccountRepository,
    private songsRepository: SongsRepository,
  ) {}

  public async queueSong({ artistId, songId }: QueueSongDTO) {
    const artistAccount = await this.artistAccountRepository.findOneBy({
      id: artistId,
    });
    if (artistAccount == null) {
      throw new RuntimeException('An artist account is required to link songs');
    }
    // if (this.queuedSongsRepository.findOneBy({}))
    // Get the user
    // Get the artist using the userId
    // Queue the song
    // Song must be unique
  }
}
