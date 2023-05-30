import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Song from '@entities/striight/song';
import { PENDING, Status } from '@constants/queued-song-status';
import User from '@entities/striight/user';
import Playlist from '@entities/striight/playlist';

@Entity('queued_songs')
export default class QueuedSong {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    default: new Date(),
    name: 'creation_date',
  })
  creationDate: Date;

  @Column({
    default: PENDING,
  })
  status: Status;

  @OneToOne(() => Song, {
    nullable: false,
  })
  @JoinColumn({ name: 'song_id' })
  song: Song;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Playlist)
  playlist: Playlist;
}
