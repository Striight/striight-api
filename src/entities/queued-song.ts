import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Song from '@entities/song';
import { PENDING, Status } from '@constants/queued-song-status';

@Entity('queued_songs')
export default class QueuedSong {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Song, {
    nullable: false,
  })
  @JoinColumn({ name: 'song_id' })
  song: Song;

  @Column({
    nullable: false,
    name: 'user_id',
  })
  userId: string;

  @Column({
    default: new Date(),
    name: 'creation_date',
  })
  creationDate: Date;

  @Column({
    default: PENDING,
  })
  status: Status;
}
