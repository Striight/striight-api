import jwt, { JwtPayload } from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  constructor(private readonly configService: ConfigService) {}

  public signToken(payload: object): string {
    return jwt.sign(payload, this.configService.get('TOKEN_SECRET'));
  }

  public decodeToken(token: string): JwtPayload {
    return jwt.verify(
      token,
      this.configService.get('TOKEN_SECRET'),
    ) as JwtPayload;
  }
}
