import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('playlists')
export default class Playlist {
  constructor(genre: string) {
    this.genre = genre;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'spotify_id',
  })
  spotifyId: string;

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

  @Column()
  name: string;
}
