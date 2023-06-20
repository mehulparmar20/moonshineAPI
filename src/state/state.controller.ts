import { Controller, Post, Body } from '@nestjs/common';
import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Post()
  async create(@Body() createStateDto: CreateStateDto) {
    return this.stateService.create(createStateDto);
  }
}
