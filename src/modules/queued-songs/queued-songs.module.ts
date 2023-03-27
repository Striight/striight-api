import { Module } from '@nestjs/common';
import { QueuedSongsController } from './queued-songs.controller';
import { QueuedSongsService } from '@modules/queued-songs/services/queued-songs.service';
import { createTypeOrmModule } from '@utils/typeorm.utils';
import QueuedSong from '@entities/queued-song';
import QueuedSongsRepository from '@modules/queued-songs/repositories/queued-songs.repository';
import User from '@entities/user';
import UsersRepository from '@modules/user/repositories/users.repository';
import ArtistAccount from '@entities/artist-account';
import ArtistAccountRepository from '@modules/artist/repositories/artist-account.repository';

@Module({
  imports: [createTypeOrmModule([QueuedSong, User, ArtistAccount])],
  controllers: [QueuedSongsController],
  providers: [
    QueuedSongsService,
    QueuedSongsRepository,
    UsersRepository,
    ArtistAccountRepository,
  ],
})
export class QueuedSongsModule {}