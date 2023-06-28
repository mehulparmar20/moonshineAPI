import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    companyId: number;
    firstName: string;
    lastName: string;
    
    
    status: number;
    otp: number;
    entryTime: string;
    payroll: number;
    city: number;
    state: number;
    country: number;
    pinCode: number;
    createdAt: Date;
    updatedAt: Date;

    @IsEmail()
    userEmail: string;

  @IsNotEmpty()
  userPassword: string;
  }
  