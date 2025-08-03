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
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/dec/roles.decorator';
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('visitor-manager')
export class VisitorManagerController {
  constructor(private readonly visitorservice: VisitorManagerService) {}
  @Roles('security')
  @Post()
  async create(@Body() createvisitordto: CreateVisitorDto): Promise<Visitor> {
    return await this.visitorservice.create(createvisitordto);
  }
  @Roles('hr', 'admin')
  @Get()
  async findAll(): Promise<Visitor[]> {
    return await this.visitorservice.findAll();
  }
  @Roles('hr', 'admin')
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Visitor | null> {
    return await this.visitorservice.findOne(id);
  }
  @Roles('admin')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatevisitordto: CreateVisitorDto
  ): Promise<Visitor | null> {
    return await this.visitorservice.update(id, updatevisitordto);
  }
  @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.visitorservice.remove(id);
  }
}
