export const SPOTIFY = 'spotify' as const;

export const APPLE_MUSIC = 'apple-music' as const;

export type Platform = typeof SPOTIFY | typeof APPLE_MUSIC;
