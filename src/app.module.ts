import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeSheet } from './exchangesheet/exchangesheet.entity';
import { ExchangeSheetService } from './exchangesheet/exchangesheet.service';
import { ExchangeSheetController } from './exchangesheet/exchangesheet.controller';
import { PlansModule } from './plans/plans.module';
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
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/entities/customer.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { randomBytes } from 'crypto';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tradeshine',
      entities: [,State,Country,City,Customer,User],
      synchronize: true,
    }),
    JwtModule.register({
      secret: randomBytes(32).toString('hex'),
      // Additional configuration options for JWT module
    }),
    TypeOrmModule.forFeature([ExchangeSheet]), 
    PlansModule, TypeOrmModule.forFeature([State]), TypeOrmModule.forFeature([Country]), CityModule, CustomerModule, UsersModule,AuthModule],
  controllers: [ AppController,ExchangeSheetController,StateController,CountryController],
  providers: [AppService,ExchangeSheetService,StateService,CountryService],
})
export class AppModule {}    
