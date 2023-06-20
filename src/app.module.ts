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



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tradeshine',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ExchangeSheet]),  TypeOrmModule.forFeature([User])],
  controllers: [ AppController,ExchangeSheetController,UsersController],
  providers: [AppService,ExchangeSheetService,UsersService],
})
export class AppModule {}
