import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Platform } from '@constants/platform';

@Entity('playlists')
export default class Playlist {
  constructor(platform: Platform, genre: string) {
    this.platform = platform;
    this.genre = genre;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  platform: Platform;

  @Column({
    nullable: false,
  })
  genre: string;

  @Column('text', {
    default: [],
    array: true,
  })
  genres: string[];

  @Column({
    default: 'en',
  })
  language: string;
}
