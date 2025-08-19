import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entity/employee.entity';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/dec/roles.decorator';
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeservice: EmployeesService) {}
  @Roles('admin')
  @Post()
  async create(
    @Body() createemployeedto: CreateEmployeeDto
  ): Promise<Employee> {
    return await this.employeeservice.create(createemployeedto);
  }
  @Roles('admin')
  @Get()
  async findAll(): Promise<Employee[]> {
    return await this.employeeservice.findAll();
  }
  @Roles('admin', 'security')
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Employee | null> {
    return await this.employeeservice.findOne(id);
  }
  @Roles('admin')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateemployeedto: UpdateEmployeeDto
  ): Promise<Employee | null> {
    return await this.employeeservice.update(id, updateemployeedto);
  }
  @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.employeeservice.remove(id);
  }
}
