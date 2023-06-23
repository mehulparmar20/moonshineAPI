import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async findOne(customer_id: number): Promise<Customer> {
    return this.customerRepository.findOne({where: {customer_id}});
  }

  async update(customer_id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.customerRepository.findOne({where:{customer_id}});
    if (!customer) {
      throw new Error(`City with ID ${customer_id} not found.`);
    }

    Object.assign(customer, updateCustomerDto);

    return this.customerRepository.save(customer);
  }

  async remove(customer_id: number): Promise<void> {
    const customer = await this.customerRepository.findOne({where:{customer_id}});
    if (!customer) {
      throw new Error(`City with ID ${customer_id} not found.`);
    }

    await this.customerRepository.remove(customer);
  }
}
