import { Module } from '@nestjs/common';
import { SubscriptionAdminController } from './subscription-admin.controller';

@Module({
  controllers: [SubscriptionAdminController]
})
export class SubscriptionAdminModule {}
