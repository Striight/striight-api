import { Module } from '@nestjs/common';
import { ExtriightService } from './extriight.service';
import { createExtriightTypeOrmModule } from '@utils/typeorm.utils';
import { ArtistsCurrentData } from '@entities/extriight';
import ArtistsCurrentDataRepository from '@modules/extriight/artists-current-data.repository';

@Module({
  providers: [ExtriightService, ArtistsCurrentDataRepository],
  imports: [createExtriightTypeOrmModule([ArtistsCurrentData])],
  exports: [ExtriightService, ArtistsCurrentDataRepository],
})
export class ExtriightModule {}
