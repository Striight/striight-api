import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Song from '@entities/song';
import User from '@entities/user';

@Entity('artist_accounts')
export default class ArtistAccount {
  constructor(user: User) {
    this.user = user;
  }

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    name: 'spotify_id',
    nullable: true,
  })
  spotifyId: string;

  @Column({
    name: 'apple_music_id',
    nullable: true,
  })
  appleMusicId: string;

  @ManyToOne(() => User, (user) => user.artists)
  // @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Song, (song) => song.artist)
  songs: Promise<Song[]>;
}
