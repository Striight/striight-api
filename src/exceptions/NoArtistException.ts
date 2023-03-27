import { HttpException } from '@nestjs/common';

export default class NoArtistException extends HttpException {
  constructor() {
    super('A linked account is needed to do this operation', 500);
  }
}
