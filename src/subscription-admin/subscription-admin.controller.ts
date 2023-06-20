import { Controller, Post, Body } from '@nestjs/common';
import { SubscriptionAdminService } from './subscription-admin.service';
import { CreateSubscriptionAdminDto } from './dto/create-subscription-admin.dto';
import { RazorpayService } from '../service/razorpay.service';

@Controller('subscription-admin')
export class SubscriptionAdminController {
  constructor(private readonly subscriptionAdminService: SubscriptionAdminService,
    private readonly razorpayService: RazorpayService,) {}

    @Post()
    async create(@Body() createSubscriptionAdminDto: CreateSubscriptionAdminDto) {
      // Process your subscription admin creation logic here
      const subscriptionAdmin = await this.subscriptionAdminService.create(createSubscriptionAdminDto);
      
      // Generate the Razorpay order
      const order = await this.razorpayService.createOrder(subscriptionAdmin.plan_id, 'INR');

      // Return the order details and created subscription admin to the client
      return { order, subscriptionAdmin };
    }
}
