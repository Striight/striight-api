import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class User {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    nullable: false,
    unique: true,
  })
  public username: string;

  @Column({
    nullable: false,
  })
  public password: string;

  @Column({
    default: false,
    name: 'is_admin',
  })
  public isAdmin: boolean;
}
