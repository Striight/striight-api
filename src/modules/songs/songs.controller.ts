import { Body, Controller, Post } from '@nestjs/common';
import RegisterSongDTO from '@modules/songs/dtos/RegisterSongDTO';
import { SongsService } from '@modules/songs/services/songs.service';
import UserId from '../../decorators/user-id.decorator';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post('register')
  registerSong(@Body() dto: RegisterSongDTO, @UserId() userId: string) {
    return this.songsService.registerSong(dto, userId);
  }

  @Post('upgrade')
  upgradeSong() {
    // Will move a song from regular to premium (need to sort out the payment system)
  }
}
