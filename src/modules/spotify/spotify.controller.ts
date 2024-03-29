import { Controller, Get, Query } from '@nestjs/common';
import SpotifyApiService from './services/spotify-api.service';
import { SPOTIFY_CALLBACK } from '@constants/spotify';
import { Public } from '@metadata/public.metadata';

@Controller(`${SPOTIFY_CALLBACK.split('/')[0]}`)
export default class SpotifyController {
  constructor(private readonly spotifyApiService: SpotifyApiService) {}
  @Get(`${SPOTIFY_CALLBACK.split('/')[1]}`)
  @Public()
  async loginCallback(@Query() query) {
    const { code, state } = query;
    await this.spotifyApiService.registerToken(code, state);
    return 'Ok';
  }

  @Get()
  public createPlaylist() {
    this.spotifyApiService.doWhatever();
  }

  @Get('test')
  @Public()
  public tryStuff() {
    this.spotifyApiService.doWhatever();
  }
}
