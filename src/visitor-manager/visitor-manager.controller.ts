import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VisitorManagerService } from './visitor-manager.service';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { Visitor } from './entity/visitor.entity';

@Controller('visitor-manager')
export class VisitorManagerController {
  constructor(private readonly visitorservice: VisitorManagerService) {}
  @Post()
  async create(@Body() createvisitordto: CreateVisitorDto): Promise<Visitor> {
    return await this.visitorservice.create(createvisitordto);
  }
  @Get()
  async findAll(): Promise<Visitor[]> {
    return await this.visitorservice.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Visitor | null> {
    return await this.visitorservice.findOne(id);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatevisitordto: CreateVisitorDto
  ): Promise<Visitor | null> {
    return await this.visitorservice.update(id, updatevisitordto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.visitorservice.remove(id);
  }
}
