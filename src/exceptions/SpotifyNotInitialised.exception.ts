import { HttpException } from '@nestjs/common';

export default class SpotifyNotInitialisedException extends HttpException {
  constructor() {
    super(
      'Our spotify service is currently down and will be back up very soon',
      400,
    );
  }
}
