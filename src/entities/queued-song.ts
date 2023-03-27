import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Platform } from '@constants/platform';
import Song from '@entities/song';

@Entity('queued_songs')
export default class QueuedSong {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Song)
  @JoinColumn({ name: 'song_id' })
  song: Song;

  @Column({
    nullable: false,
  })
  platform: Platform;

  @Column({
    nullable: false,
    name: 'user_id',
  })
  userId: string;

  @Column({
    nullable: false,
    default: false,
    name: 'is_premium',
  })
  isPremium: boolean;
}
