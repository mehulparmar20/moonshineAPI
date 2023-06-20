import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangeSheet } from './exchangesheet.entity';

@Injectable()
export class ExchangeSheetService {
  constructor(
    @InjectRepository(ExchangeSheet)
    private readonly ExchangeSheetRepository: Repository<ExchangeSheet>,
  ) {}

  async findByEmail(currency_from: string): Promise<ExchangeSheet> {
    return await this.ExchangeSheetRepository.findOne({ where: { currency_from } });

  }

  async create(exchangesheet: ExchangeSheet): Promise<ExchangeSheet> {
    return await this.ExchangeSheetRepository.save(exchangesheet);
  }
}
