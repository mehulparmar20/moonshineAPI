import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {

  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  user_id: number;

  @Column()
  company_detail_id: number;

  @Column()
  bank_id: number;

  @Column()
  customer_name: string;

  @Column()
  customer_email: string;

  @Column()
  group_cos: number;

  @Column()
  postbox: string;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column()
  area: string;

  @Column()
  landmark: string;

  @Column()
  country: number;

  @Column()
  state: number;

  @Column()
  city: number;

  @Column()
  address_type: number;

  @Column()
  phone_no: number;

  @Column()
  fax: number;

  @Column()
  location_email: string;

  @Column()
  website: string;

  @Column()
  ref_by: string;

  @Column()
  trade_activity: string;

  @Column()
  status: number;

  @Column()
  facility_location: string;

  @Column()
  create_at: Date;
}
