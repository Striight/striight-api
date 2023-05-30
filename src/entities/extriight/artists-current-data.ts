import { Column, Entity } from 'typeorm';

@Entity('artists_current_data')
export default class ArtistsCurrentData {
  @Column({
    name: 'artist_id',
    primary: true,
    nullable: false,
  })
  artistId: string;

  @Column({
    name: 'artist_name',
    nullable: false,
  })
  artistName: string;

  @Column({
    name: 'popularity',
    nullable: false,
  })
  popularity: number;

  @Column({
    name: 'monthly_listeners',
  })
  monthlyListeners: number;

  @Column({
    name: 'genre',
  })
  genre: string;

  @Column({
    name: 'last_updated',
    type: 'timestamp',
  })
  lastUpdated: Date;
}
