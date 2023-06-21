import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  async create(createCityDto: CreateCityDto): Promise<City> {
    const city = this.cityRepository.create(createCityDto);
    return this.cityRepository.save(city);
  }

  async findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  async findOne(city_id: number): Promise<City> {
    return this.cityRepository.findOne({where: {city_id}});
  }

  async update(city_id: number, updateCityDto: UpdateCityDto): Promise<City> {
    const city = await this.cityRepository.findOne({where:{city_id}});
    if (!city) {
      throw new Error(`City with ID ${city_id} not found.`);
    }

    Object.assign(city, updateCityDto);

    return this.cityRepository.save(city);
  }

  async remove(city_id: number): Promise<void> {
    const city = await this.cityRepository.findOne({where:{city_id}});
    if (!city) {
      throw new Error(`City with ID ${city_id} not found.`);
    }

    await this.cityRepository.remove(city);
  }
}
