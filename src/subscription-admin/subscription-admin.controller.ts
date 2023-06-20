import { Controller, Post, Body } from '@nestjs/common';
import { SubscriptionAdminService } from './subscription-admin.service';
import { CreateSubscriptionAdminDto } from './dto/create-subscription-admin.dto';

@Controller('subscription-admin')
export class SubscriptionAdminController {
  constructor(private readonly subscriptionAdminService: SubscriptionAdminService) {}

  @Post()
  async create(@Body() createSubscriptionAdminDto: CreateSubscriptionAdminDto) {
    return this.subscriptionAdminService.create(createSubscriptionAdminDto);
  }
}
