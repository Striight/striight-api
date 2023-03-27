import { Injectable } from '@nestjs/common';
import QueueSongDTO from '@modules/queued-songs/dtos/QueueSongDTO';
import QueuedSongsRepository from '@modules/queued-songs/repositories/queued-songs.repository';
import UsersRepository from '@modules/user/repositories/users.repository';
import ArtistAccountRepository from '@modules/artist/repositories/artist-account.repository';
import ArtistAccount from '@entities/artist-account';
import { RuntimeException } from '@nestjs/core/errors/exceptions';
import QueuedSong from '@entities/queued-song';
import { SPOTIFY } from '@constants/platform';

@Injectable()
export class QueuedSongsService {
  constructor(
    private queuedSongsRepository: QueuedSongsRepository,
    private usersRepository: UsersRepository,
    private artistAccountRepository: ArtistAccountRepository,
  ) {}

  private async queueSpotifySong(artist: ArtistAccount, songId: string) {
    const queue = new QueuedSong();
    queue.songId = songId;
    queue.userId = artist.user.id;
    queue.platform = SPOTIFY;
    //TODO pull the song and check if it's a premium song
    queue.isPremium = false;
  }

  public async queueSong({ artistId, songId }: QueueSongDTO) {
    const artistAccount = await this.artistAccountRepository.findOneBy({
      id: artistId,
    });
    if (artistAccount == null) {
      throw new RuntimeException('An artist account is required to link songs');
    }
    switch (artistAccount.platform) {
      case SPOTIFY:
        await this.queueSpotifySong(artistAccount, songId);
        break;
      default:
        throw new RuntimeException(
          'Tried to queue a song that belongs to no platform',
        );
    }
    // if (this.queuedSongsRepository.findOneBy({}))
    // Get the user
    // Get the artist using the userId
    // Queue the song
    // Song must be unique
  }
}
