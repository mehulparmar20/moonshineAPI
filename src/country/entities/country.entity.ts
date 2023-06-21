import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  country_id: number;

  @Column()
  country_name: string;
}
