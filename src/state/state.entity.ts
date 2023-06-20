import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  state_id: number;

  @Column()
  name: string;

  @Column()
  country_id: number;
}
