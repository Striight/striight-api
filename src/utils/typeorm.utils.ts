import { TypeOrmModule } from '@nestjs/typeorm';
import { EXTRIIGHT_DB, STRIIGHT_DB } from '@constants/database';

// eslint-disable-next-line @typescript-eslint/ban-types
export function createStriightTypeOrmModule(entities: Function[]) {
  return TypeOrmModule.forFeature(entities, STRIIGHT_DB);
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function createExtriightTypeOrmModule(entities: Function[]) {
  return TypeOrmModule.forFeature(entities, EXTRIIGHT_DB);
}
