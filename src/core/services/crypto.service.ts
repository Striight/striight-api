import { Injectable } from '@nestjs/common';
import crypto from 'crypto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class CryptoService {
  constructor(private configService: ConfigService) {}

  private readonly algorythm = 'aes-256-ctr';
  private readonly iv = Buffer.from(
    this.configService.get('ENCRYPTION_KEY') as string,
    'utf-8',
  ).slice(0, 16);

  private getKey(secret: string) {
    return Buffer.from(secret, 'utf8').slice(0, 32);
  }

  public encryptString(str: string, secret: string) {
    const cipher = crypto.createCipheriv(
      this.algorythm,
      this.getKey(secret),
      this.iv,
    );
    let encrypted = cipher.update(str, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  public decryptString(str: string, secret: string) {
    const decipher = crypto.createDecipheriv(
      this.algorythm,
      this.getKey(secret),
      this.iv,
    );
    let decrypted = decipher.update(str, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}
