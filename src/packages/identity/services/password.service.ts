import { compare, genSalt, hash } from 'bcryptjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordService {
  public async hashPassword(password: string): Promise<string> {
    const salt = await genSalt(10);
    return hash(password, salt);
  }

  public verifyPassword(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }
}
