import { Inject } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EXTRIIGHT_DB, STRIIGHT_DB } from '@constants/database';

export const InjectStriightRepository = (entity: any) => {
  return Inject(getRepositoryToken(entity, STRIIGHT_DB));
};

export const InjectExtriightRepository = (entity: any) => {
  return Inject(getRepositoryToken(entity, EXTRIIGHT_DB));
};
