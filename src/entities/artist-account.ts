import { Column, Entity } from 'typeorm';

export type STREAMING_SERVICE = 'spotify';

@Entity()
export default class ArtistAccount {
  @Column({
    primary: true,
    nullable: false,
  })
  public userId: number;

  @Column({
    nullable: false,
    primary: true,
  })
  public steamingService: STREAMING_SERVICE;

  @Column({
    nullable: false,
  })
  public artistId: string;
}
