import { TypeOrmModule } from '@nestjs/typeorm';

// eslint-disable-next-line @typescript-eslint/ban-types
export function createTypeOrmModule(entities: Function[]) {
  return TypeOrmModule.forFeature(entities);
}
