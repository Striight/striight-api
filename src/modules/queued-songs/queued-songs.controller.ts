import { Body, Controller, Post } from '@nestjs/common';
import QueueSongDTO from '@modules/queued-songs/dtos/QueueSongDTO';
import { QueuedSongsService } from '@modules/queued-songs/services/queued-songs.service';
import CtxUser from '../../decorators/user-id.decorator';

@Controller('queued-songs')
export class QueuedSongsController {
  constructor(private queuedSongsService: QueuedSongsService) {}

  @Post('queue')
  public queueSong(@Body() body: QueueSongDTO, @CtxUser() userId: string) {
    return this.queuedSongsService.queueSong(body, userId);
  }
}
