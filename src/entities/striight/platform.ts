import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('platforms')
export default class Platform {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  label: string;
}
