import { Column, Entity } from 'typeorm';

export type STREAMING_SERVICE = 'spotify';

@Entity()
export default class ArtistAccount {
  constructor(userId, streamingService: STREAMING_SERVICE, artistId) {
    this.userId = userId;
    this.streamingService = streamingService;
    this.artistId = artistId;
  }

  @Column({
    primary: true,
    nullable: false,
  })
  public userId: string;

  @Column({
    nullable: false,
    primary: true,
  })
  public streamingService: STREAMING_SERVICE;

  @Column({
    nullable: false,
  })
  public artistId: string;
}
