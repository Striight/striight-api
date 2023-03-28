import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import ArtistAccount from '@entities/artist-account';

@Entity('songs')
export default class Song {
  constructor(songName: string) {
    this.name = songName;
  }

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(() => ArtistAccount, (artistAccount) => artistAccount.songs, {
    nullable: false,
  })
  artist: ArtistAccount;

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

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    name: 'is_premium',
    default: false,
  })
  isPremium: boolean;
}
