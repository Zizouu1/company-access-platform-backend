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
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/dec/roles.decorator';
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('follow-administrator')
export class FollowAdministratorController {
  constructor(
    private readonly administratorservice: FollowAdministratorService
  ) {}
  @Roles('security')
  @Post()
  async create(
    @Body() createadministratordto: CreateAdministratorDto
  ): Promise<Administrator> {
    return await this.administratorservice.create(createadministratordto);
  }
  @Roles('hr', 'admin')
  @Get()
  async findAll(): Promise<Administrator[]> {
    return await this.administratorservice.findAll();
  }
  @Roles('hr', 'admin')
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Administrator | null> {
    return await this.administratorservice.findOne(id);
  }
  @Roles('admin')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateadministratordto: CreateAdministratorDto
  ): Promise<Administrator | null> {
    return await this.administratorservice.update(id, updateadministratordto);
  }
  @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.administratorservice.remove(id);
  }
}
