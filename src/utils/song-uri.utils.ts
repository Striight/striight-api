// Spotify: spotify:track:5jAz81P8Aq1wIIcCkIDq57

import { Platform, SPOTIFY } from '@constants/platform';

const spotifyRegex = /^spotify:track:[A-Za-z0-9]+$/;

export const identifyUri = (songURI: string): Platform => {
  if (songURI.match(spotifyRegex)) return SPOTIFY;

  return null;
};

export const extractSpotifyIdFromURI = (songURI: string) => {
  return songURI.split(':')[2];
};
