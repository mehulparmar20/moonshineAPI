import { Body, Controller, Get,Query } from '@nestjs/common';
import { ExchangeSheet } from './exchangesheet.entity';
import { ExchangeSheetService } from './exchangesheet.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Controller('exchangesheet')
export class ExchangeSheetController {
  constructor(private readonly exchangesheetService: ExchangeSheetService) {}

  @Get('getlist')
  async findAll(@Query() query: ExchangeSheet) {
   
    return ;
  }

  
}
