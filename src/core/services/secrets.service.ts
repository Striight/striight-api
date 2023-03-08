import { Injectable } from '@nestjs/common';

@Injectable()
export default class SecretsService {
  public getSpotifyCredentials() {
    return {
      clientId: '6d92de1ede24487b99b4c5217eda137d',
      secret: 'beed94a25d06472592a9ad972c141f04',
    };
  }
}
