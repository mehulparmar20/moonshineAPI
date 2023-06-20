import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ExchangeSheet } from './exchangesheet/exchangesheet.entity';
import { ExchangeSheetService } from './exchangesheet/exchangesheet.service';
import { ExchangeSheetController } from './exchangesheet/exchangesheet.controller';

import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { User } from './users/user.entity';
import { SubscriptionAdminController } from './subscription-admin/subscription-admin.controller';
import { SubscriptionAdminService } from './subscription-admin/subscription-admin.service';
import { SubscriptionAdmin } from './subscription-admin/subscription-admin.entity';
import { PlansModule } from './plans/plans.module';

import { RazorpayModule } from './service/razorpay.module';
import { StateModule } from './state/state.module';
import { StateController } from './state/state.controller';
import { StateService } from './state/state.service';
import { State } from './state/state.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tradeshine',
      entities: [User,SubscriptionAdmin,State],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ExchangeSheet]),  TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([SubscriptionAdmin]), 
    PlansModule,RazorpayModule, TypeOrmModule.forFeature([State])],
  controllers: [ AppController,ExchangeSheetController,UsersController,SubscriptionAdminController,StateController],
  providers: [AppService,ExchangeSheetService,UsersService,SubscriptionAdminService,StateService],
})
export class AppModule {}    
