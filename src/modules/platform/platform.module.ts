import { Module } from '@nestjs/common';
import { PlatformService } from './platform.service';
import PlatformRepository from '@modules/platform/platform.repository';
import { createTypeOrmModule } from '@utils/typeorm.utils';
import Platform from '@entities/platform';

@Module({
  providers: [PlatformService, PlatformRepository],
  imports: [createTypeOrmModule([Platform])],
  exports: [PlatformService],
})
export class PlatformModule {}
