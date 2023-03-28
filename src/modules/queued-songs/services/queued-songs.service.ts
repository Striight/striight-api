import { Injectable } from '@nestjs/common';
import QueueSongDTO from '@modules/queued-songs/dtos/QueueSongDTO';
import QueuedSongsRepository from '@modules/queued-songs/repositories/queued-songs.repository';
import UsersRepository from '@modules/user/repositories/users.repository';
import ArtistAccountRepository from '@modules/artist/repositories/artist-account.repository';
import { RuntimeException } from '@nestjs/core/errors/exceptions';
import SongsRepository from '@modules/songs/songs.repository';
import UsersService from '@modules/user/services/users.service';
import QueuedSong from '@entities/queued-song';

@Injectable()
export class QueuedSongsService {
  constructor(
    private queuedSongsRepository: QueuedSongsRepository,
    private usersRepository: UsersRepository,
    private artistAccountRepository: ArtistAccountRepository,
    private songsRepository: SongsRepository,
    private userService: UsersService,
  ) {}

  public async getBySong(songId: string) {
    return await this.queuedSongsRepository.findOneBy({ song: { id: songId } });
  }

  public async queueSong({ artistId, songId }: QueueSongDTO, userId: string) {
    const user = await this.userService.findById(userId);
    const artist = await this.artistAccountRepository.findOneBy({
      user: {
        id: user.id,
      },
      id: artistId,
    });
    if (artist == null) {
      throw new RuntimeException('An artist account is required to link songs');
    }
    if (await this.getBySong(songId)) {
      throw new RuntimeException('This song is queued already');
    }
    const songs = await artist.songs;
    const song = songs.find(({ id }) => id === songId);
    if (song == null) {
      throw new RuntimeException('Song is not registered to the artist');
    }
    const queue = new QueuedSong();
    queue.song = song;
    queue.userId = user.id;
    await this.queuedSongsRepository.save(queue);
  }
}
