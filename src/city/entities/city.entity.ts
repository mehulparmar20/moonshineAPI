import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  city_id : number;

  @Column()
  country_id: number;

  @Column()
  state_id: number;

  @Column()
  city_name: string;
}
