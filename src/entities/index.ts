import SpotifyAccountConfig from './spotify-account-config';
import ArtistAccount from './artist-account';
import Playlist from './playlist';
import Song from './song';
import User from './user';
import QueuedSong from './queued-song';

export {
  SpotifyAccountConfig,
  ArtistAccount,
  Playlist,
  Song,
  User,
  QueuedSong,
};

const entities = [
  SpotifyAccountConfig,
  ArtistAccount,
  Playlist,
  Song,
  User,
  QueuedSong,
];

export default entities;
