import { Column, Entity } from 'typeorm';

@Entity('users')
export default class User {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  @Column({
    nullable: false,
    primary: true,
    unique: true,
    generated: 'uuid',
  })
  public userId: string;

  @Column({
    nullable: false,
    unique: true,
  })
  public username: string;

  @Column({
    nullable: false,
  })
  public password: string;
}
