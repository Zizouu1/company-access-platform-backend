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

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeservice: EmployeesService) {}
  @Post()
  async create(
    @Body() createemployeedto: CreateEmployeeDto
  ): Promise<Employee> {
    return await this.employeeservice.create(createemployeedto);
  }
  @Get()
  async findAll(): Promise<Employee[]> {
    return await this.employeeservice.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Employee | null> {
    return await this.employeeservice.findOne(id);
  }
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateemployeedto: UpdateEmployeeDto
  ): Promise<Employee | null> {
    return await this.employeeservice.update(id, updateemployeedto);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.employeeservice.remove(id);
  }
}
