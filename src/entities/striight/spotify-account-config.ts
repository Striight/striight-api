import { Column, Entity } from 'typeorm';

@Entity()
export default class SpotifyAccountConfig {
  constructor(token: string) {
    this.token = token;
  }

  @Column({
    nullable: false,
    primary: true,
  })
  token: string;
}
