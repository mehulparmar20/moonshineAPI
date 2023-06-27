import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeSheet } from './exchangesheet/exchangesheet.entity';
import { ExchangeSheetService } from './exchangesheet/exchangesheet.service';
import { ExchangeSheetController } from './exchangesheet/exchangesheet.controller';
import { SubscriptionAdminController } from './subscription-admin/subscription-admin.controller';
import { SubscriptionAdminService } from './subscription-admin/subscription-admin.service';
import { SubscriptionAdmin } from './subscription-admin/subscription-admin.entity';
import { PlansModule } from './plans/plans.module';
import { RazorpayModule } from './service/razorpay.module';
import { StateModule } from './state/state.module';
import { StateController } from './state/state.controller';
import { StateService } from './state/state.service';
import { State } from './state/state.entity';
import { CountryModule } from './country/country.module';
import { Country } from './country/entities/country.entity';
import { CountryController } from './country/country.controller';
import { CountryService } from './country/country.service';
import { CityModule } from './city/city.module';
import { City } from './city/entities/city.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/entities/customer.entity';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tradeshine',
      entities: [SubscriptionAdmin,State,Country,City,User,Customer],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ExchangeSheet]),TypeOrmModule.forFeature([SubscriptionAdmin]), 
    PlansModule,RazorpayModule, TypeOrmModule.forFeature([State]), TypeOrmModule.forFeature([Country]), CityModule, UsersModule, CustomerModule,AuthModule],
  controllers: [ AppController,ExchangeSheetController,SubscriptionAdminController,StateController,CountryController],
  providers: [AppService,ExchangeSheetService,SubscriptionAdminService,StateService,CountryService],
})
export class AppModule {}    
