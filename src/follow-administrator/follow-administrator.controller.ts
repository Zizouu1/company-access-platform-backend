import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FollowAdministratorService } from './follow-administrator.service';
import { CreateAdministratorDto } from './dto/administrator.dto';
import { Administrator } from './entity/administrator.entity';

@Controller('follow-administrator')
export class FollowAdministratorController {
  constructor(
    private readonly administratorservice: FollowAdministratorService
  ) {}
  @Post()
  async create(
    @Body() createadministratordto: CreateAdministratorDto
  ): Promise<Administrator> {
    return await this.administratorservice.create(createadministratordto);
  }
  @Get()
  async findAll(): Promise<Administrator[]> {
    return await this.administratorservice.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Administrator | null> {
    return await this.administratorservice.findOne(id);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateadministratordto: CreateAdministratorDto
  ): Promise<Administrator | null> {
    return await this.administratorservice.update(id, updateadministratordto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.administratorservice.remove(id);
  }
}
