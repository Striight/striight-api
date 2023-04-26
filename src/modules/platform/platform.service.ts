import { Injectable } from '@nestjs/common';
import PlatformRepository from '@modules/platform/platform.repository';

@Injectable()
export class PlatformService {
  constructor(private platformRepository: PlatformRepository) {}

  public getPlatform(platformName: string) {
    return this.platformRepository.findOneBy({ name: platformName });
  }
}
