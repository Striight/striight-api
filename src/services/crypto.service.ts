import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import crypto from 'crypto';

@Injectable()
export default class CryptoService {
  private readonly algorythm = 'aes-256-ctr';
  private readonly iv = crypto.randomBytes(16);

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
