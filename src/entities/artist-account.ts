import { Column, Entity } from 'typeorm';

@Entity()
export default class ArtistAccount {
  constructor(userId) {
    this.userId = userId;
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
  public spotifyId: string;
}
