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
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/dec/roles.decorator';
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('delay-pec')
export class DelayPecController {
  constructor(private readonly delayservice: DelayPecService) {}
  @Roles('security')
  @Post()
  async create(@Body() createdelaydto: CreateDelayDto): Promise<Delay> {
    return await this.delayservice.create(createdelaydto);
  }
  @Roles('hr', 'admin')
  @Get()
  async findAll(): Promise<Delay[]> {
    return await this.delayservice.findAll();
  }
  @Roles('hr', 'admin')
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Delay | null> {
    return await this.delayservice.findOne(id);
  }
  @Roles('admin')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedelaydto: CreateDelayDto
  ): Promise<Delay | null> {
    return await this.delayservice.update(id, updatedelaydto);
  }
  @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.delayservice.remove(id);
  }
}
