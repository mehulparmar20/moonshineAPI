import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  company_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  user_email: string;

  @Column()
  user_password: string;

  @Column()
  status: number;

  @Column()
  otp: number;

  @Column()
  entry_time: string;

  @Column()
  payroll: number;

  @Column()
  city: number;

  @Column()
  state: number;

  @Column()
  country: number;

  @Column()
  pin_code: number;

  @Column({ type: 'date' })
  create_at: Date;

  @Column({ type: 'date' })
  update_at: Date;
}
