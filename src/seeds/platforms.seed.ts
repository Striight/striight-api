import { DataSource } from 'typeorm';
import Platform from '@entities/platform';
import { APPLE_MUSIC, SPOTIFY } from '@constants/platform';

const SPOTIFY_ITEM = {
  name: SPOTIFY,
  label: 'Spotify',
};

const APPLE_MUSIC_ITEM = {
  name: APPLE_MUSIC,
  label: 'Apple Music',
};

const Platforms = [SPOTIFY_ITEM, APPLE_MUSIC_ITEM];

export const runSeedServices = async (
  connection: DataSource,
): Promise<void> => {
  const serviceRepository = connection.getRepository(Platform);

  for (const platformData of Platforms) {
    const existingPlatform = await serviceRepository.findOneBy({
      name: platformData.name,
    });
    if (!existingPlatform) {
      await serviceRepository.save(platformData);
    }
  }
};
