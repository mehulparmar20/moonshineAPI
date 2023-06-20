export class CreateUserDto {
    user_id: number;
    company_id: number;
    first_name: string;
    last_name: string;
    user_email: string;
    user_password: string;
    status: number;
    otp: number;
    entry_time: string;
    payroll: number;
    city: number;
    state: number;
    country: number;
    pin_code: number;
    create_at: Date;
    update_at: Date;
  }
  