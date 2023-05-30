import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Platform from '@entities/striight/platform';

@Entity('playlists')
export default class Playlist {
  constructor(genre: string) {
    this.genre = genre;
  }

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    nullable: false,
  })
  genre: string;

  @Column('text', {
    array: true,
    default: [],
  })
  genres: string[];

  @Column()
  name: string;

  /**
   * The id of the playlist in the assigned platform
   * Example: If the platform is Spotify, it's a link to the playlist IN Spotify
   */
  @Column({
    name: 'platform_playlist_id',
    nullable: false,
  })
  platformPlaylistId: string;

  /**
   * The description put in the playlist on the platform
   */
  @Column()
  description: string;

  /**
   * Base64 img that is used as cover picture on the playlist
   */
  @Column({
    name: 'cover_picture',
  })
  coverPicture: string;

  @ManyToOne(() => Platform, {
    nullable: false,
  })
  platform: Platform;
}
