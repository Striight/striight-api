import { Module } from '@nestjs/common';
import { PlatformService } from './platform.service';
import PlatformRepository from '@modules/platform/platform.repository';
import { createStriightTypeOrmModule } from '@utils/typeorm.utils';
import Platform from '@entities/striight/platform';

@Module({
  providers: [PlatformService, PlatformRepository],
  imports: [createStriightTypeOrmModule([Platform])],
  exports: [PlatformService],
})
export class PlatformModule {}
