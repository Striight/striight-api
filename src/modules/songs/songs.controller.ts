import { Body, Controller, Post } from '@nestjs/common';
import RegisterSongDTO from '@modules/songs/dtos/RegisterSongDTO';
import { SongsService } from '@modules/songs/services/songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post('register')
  registerSong(@Body() dto: RegisterSongDTO) {
    return this.songsService.registerSong(dto);
  }

  @Post('upgrade')
  upgradeSong() {
    // Will move a song from regular to premium (need to sort out the payment system)
  }
}
