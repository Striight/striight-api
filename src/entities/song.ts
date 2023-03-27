import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import ArtistAccount from '@entities/artist-account';

@Entity('songs')
export default class Song {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(() => ArtistAccount, (artistAccount) => artistAccount.songs)
  artist: ArtistAccount;

  @Column({
    nullable: false,
  })
  uri: string;
}
