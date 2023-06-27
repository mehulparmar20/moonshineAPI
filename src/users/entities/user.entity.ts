import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {
    BaseEntity,
    BeforeInsert,
    CreateDateColumn,
   
    UpdateDateColumn,
  } from 'typeorm';
  import * as bcrypt from 'bcryptjs';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  companyId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userEmail: string;

  @Column()
  userPassword: string;

  @Column()
  status: number;

  @Column()
  otp: number;

  @Column()
  entryTime: string;

  @Column()
  payroll: number;

  @Column()
  city: number;

  @Column()
  state: number;

  @Column()
  country: number;

  @Column()
  pinCode: number;

  @Column({ type: 'date' })
  createdAt: Date;

  @Column({ type: 'date' })
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.userPassword = await bcrypt.hash(this.userPassword, 8);
  }

  async validatePassword(userPassword: string): Promise<boolean> {
    return bcrypt.compare(userPassword, this.userPassword);
  }
}