import {
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Controller,
} from '@nestjs/common';
import { DelayPecService } from './delay-pec.service';
import { CreateDelayDto } from './dto/delay-pec.dto';
import { Delay } from './entity/delay-pec.entity';

@Controller('delay-pec')
export class DelayPecController {
  constructor(private readonly delayservice: DelayPecService) {}
  @Post()
  async create(@Body() createdelaydto: CreateDelayDto): Promise<Delay> {
    return await this.delayservice.create(createdelaydto);
  }
  @Get()
  async findAll(): Promise<Delay[]> {
    return await this.delayservice.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Delay | null> {
    return await this.delayservice.findOne(id);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedelaydto: CreateDelayDto
  ): Promise<Delay | null> {
    return await this.delayservice.update(id, updatedelaydto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.delayservice.remove(id);
  }
}
