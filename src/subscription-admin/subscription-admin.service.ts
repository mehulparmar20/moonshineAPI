import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubscriptionAdmin } from './subscription-admin.entity';
import { CreateSubscriptionAdminDto } from './dto/create-subscription-admin.dto';

@Injectable()
export class SubscriptionAdminService {
  constructor(
    @InjectRepository(SubscriptionAdmin)
    private readonly subscriptionAdminRepository: Repository<SubscriptionAdmin>,
  ) {}

  async create(createSubscriptionAdminDto: CreateSubscriptionAdminDto): Promise<SubscriptionAdmin> {
    const subscriptionAdmin = this.subscriptionAdminRepository.create(createSubscriptionAdminDto);
    return this.subscriptionAdminRepository.save(subscriptionAdmin);
  }

  async getSubscriptionAdmin(admin_id: number): Promise<SubscriptionAdmin> {
    return this.subscriptionAdminRepository.findOne({where: {admin_id}});
  }
}
