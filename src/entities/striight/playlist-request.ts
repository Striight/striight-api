import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from '@entities/striight/user';

@Entity('playlist_requests')
export default class PlaylistRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  user: User;

  @Column({
    nullable: false,
  })
  genre: string;
}
