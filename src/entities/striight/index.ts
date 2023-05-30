import SpotifyAccountConfig from './spotify-account-config';
import ArtistAccount from './artist-account';
import Playlist from './playlist';
import Song from './song';
import User from './user';
import QueuedSong from './queued-song';
import PlaylistRequest from '@entities/striight/playlist-request';
import Platform from '@entities/striight/platform';

export {
  SpotifyAccountConfig,
  ArtistAccount,
  Playlist,
  Song,
  User,
  QueuedSong,
  PlaylistRequest,
  Platform,
};

const entities = [
  SpotifyAccountConfig,
  ArtistAccount,
  Playlist,
  Song,
  User,
  QueuedSong,
  PlaylistRequest,
  Platform,
];

export default entities;
