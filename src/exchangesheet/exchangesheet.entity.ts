import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExchangeSheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  currency_from: string;

  @Column()
  currency_to: string;

  @Column()
  rate: number;

  @Column()
  date: Date;
}
