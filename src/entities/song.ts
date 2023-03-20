import { Column, Entity } from 'typeorm';

@Entity('songs')
export default class Song {
  @Column({
    nullable: false,
    primary: true,
    unique: true,
    generated: 'uuid',
  })
  public userId: string;

  @Column({
    nullable: false,
  })
  name: string;
}
