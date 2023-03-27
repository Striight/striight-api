import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Platform } from '@constants/platform';
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
    nullable: false,
  })
  @Column({
    nullable: false,
  })
  platform: Platform;

  @Column({
    nullable: false,
    name: 'platform_id',
  })
  public platformId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Song, (song) => song.artist)
  songs: Promise<Song[]>;
}
