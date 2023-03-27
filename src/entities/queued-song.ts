import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Platform } from '@constants/platform';

@Entity('queued_songs')
export default class QueuedSong {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    name: 'song_id',
  })
  songId: string;

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
