import { Module } from '@nestjs/common';
import { QueuedSongsController } from './queued-songs.controller';
import { QueuedSongsService } from '@modules/queued-songs/services/queued-songs.service';
import { createStriightTypeOrmModule } from '@utils/typeorm.utils';
import QueuedSong from '@entities/striight/queued-song';
import QueuedSongsRepository from '@modules/queued-songs/repositories/queued-songs.repository';
import User from '@entities/striight/user';
import UsersRepository from '@modules/user/repositories/users.repository';
import ArtistAccount from '@entities/striight/artist-account';
import ArtistAccountRepository from '@modules/artist/repositories/artist-account.repository';
import Song from '@entities/striight/song';
import SongsRepository from '@modules/songs/songs.repository';
import UsersModule from '@modules/user/users.module';

@Module({
  imports: [
    createStriightTypeOrmModule([QueuedSong, User, ArtistAccount, Song]),
    UsersModule,
  ],
  controllers: [QueuedSongsController],
  providers: [
    QueuedSongsService,
    QueuedSongsRepository,
    UsersRepository,
    ArtistAccountRepository,
    SongsRepository,
  ],
})
export class QueuedSongsModule {}
