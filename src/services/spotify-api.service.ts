import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import SpotifyWebApi from 'spotify-web-api-node';
import SecretsService from './secrets.service';
import CryptoService from './crypto.service';
import { ConfigService } from '@nestjs/config';
import { SPOTIFY_CALLBACK } from '../constants/spotify';
import SpotifyAccountConfigRepository from '../repositories/spotify-account-config.repository';
import { SpotifyAccountConfig } from '../entities';

@Injectable()
export default class SpotifyApiService {
  private readonly spotifyWebApi: SpotifyWebApi;
  private readonly SECRET_CODE = v4();
  constructor(
    private readonly secretService: SecretsService,
    private readonly cryptoService: CryptoService,
    private readonly configService: ConfigService,
    private readonly spotifyAccountConfigRepository: SpotifyAccountConfigRepository,
  ) {
    const spotifyCredentials = secretService.getSpotifyCredentials();
    this.spotifyWebApi = new SpotifyWebApi({
      clientId: spotifyCredentials.clientId,
      clientSecret: spotifyCredentials.secret,
      redirectUri: `http://localhost:4000/${SPOTIFY_CALLBACK}`,
    });
    this.init();
  }

  private initialized = false;

  private init() {
    return new Promise<void>(async (res, reject) => {
      if (this.initialized) {
        res();
        return;
      }
      const tokenCount = await this.spotifyAccountConfigRepository.count();
      if (tokenCount === 0) {
        const url = this.spotifyWebApi.createAuthorizeURL(
          ['playlist-modify-public', 'playlist-modify-private'],
          this.SECRET_CODE,
          true,
        );
        console.log(url);
      } else {
        const accountConfig = (
          await this.spotifyAccountConfigRepository.find()
        )[0];
        const decoded = this.cryptoService.decryptString(
          accountConfig.token,
          this.configService.get('SPOTIFY_TOKEN_SECRET'),
        );
        this.spotifyWebApi.setRefreshToken(decoded);
        const { body } = await this.spotifyWebApi.refreshAccessToken();
        this.spotifyWebApi.setAccessToken(body.access_token);
      }
    });
  }

  public async registerToken(code: string, state: string) {
    if (state !== this.SECRET_CODE) {
      throw new Error('Invalid code');
    }
    const {
      body: { access_token, refresh_token },
    } = await this.spotifyWebApi.authorizationCodeGrant(code);
    this.spotifyWebApi.setAccessToken(access_token);
    this.spotifyWebApi.setRefreshToken(refresh_token);
    const encryptedRefreshToken = this.cryptoService.encryptString(
      refresh_token,
      this.configService.get('SPOTIFY_TOKEN_SECRET'),
    );
    await this.spotifyAccountConfigRepository.save(
      new SpotifyAccountConfig(encryptedRefreshToken),
    );
  }

  public async createPlaylist(name: string) {
    try {
      await this.spotifyWebApi.createPlaylist(name);
    } catch (err) {
      console.log(err);
    }
  }

  public async doWhatever() {
    const { body } = await this.spotifyWebApi.getTrack(
      '2qqPOFjYjwGuJhCj3tnIkx',
    );
    const { body: bodyArtist } = await this.spotifyWebApi.getArtist(
      body.artists[0].id,
    );
    console.log(bodyArtist);
    // const { body } = await this.spotifyWebApi.searchTracks('Love Yourself');
    // console.log(body.tracks.items[0]);
  }
}
