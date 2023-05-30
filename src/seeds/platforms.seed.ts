import Platform from '@entities/striight/platform';
import { APPLE_MUSIC, SPOTIFY } from '@constants/platform';
import { INestApplication } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { STRIIGHT_DB } from '@constants/database';

const SPOTIFY_ITEM = {
  name: SPOTIFY,
  label: 'Spotify',
};

const APPLE_MUSIC_ITEM = {
  name: APPLE_MUSIC,
  label: 'Apple Music',
};

const Platforms = [SPOTIFY_ITEM, APPLE_MUSIC_ITEM];

export const runSeedServices = async (app: INestApplication): Promise<void> => {
  const serviceRepository = app.get(getRepositoryToken(Platform, STRIIGHT_DB));

  for (const platformData of Platforms) {
    const existingPlatform = await serviceRepository.findOneBy({
      name: platformData.name,
    });
    if (!existingPlatform) {
      await serviceRepository.save(platformData);
    }
  }
};
