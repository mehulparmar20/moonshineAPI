import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SubscriptionAdmin {
  @PrimaryGeneratedColumn()
  admin_id: number;

  @Column({ nullable: true })
  company_name: string;

  @Column({ nullable: true })
  admin_email: string;

  @Column({ nullable: true })
  admin_password: string;

  @Column({ nullable: true })
  company_address: string;

  @Column({ nullable: true })
  subscription_id: string;

  @Column({ nullable: true })
  status: number;

  @Column({ nullable: true })
  plan_id: number;

  @Column({ nullable: true })
  plan_start: string;

  @Column({ nullable: true })
  plan_end: string;

  @Column({ nullable: true })
  api_status: number;

  @Column({ nullable: true })
  company_logo: string;

  @Column({ nullable: true })
  ip: string;

  @Column({ nullable: true })
  city: number;

  @Column({ nullable: true })
  state: number;

  @Column({ nullable: true })
  country: number;

  @Column({ nullable: true })
  pin_code: string;

  @Column({ nullable: true })
  login_time: string;

  @Column({ nullable: true })
  token: string;

  @Column({ nullable: true })
  create_at: Date;
}
