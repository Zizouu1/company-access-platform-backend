import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/common/base.service';
import { Employee } from './entity/employee.entity';

@Injectable()
export class EmployeesService extends BaseService<Employee> {
  constructor(
    @InjectRepository(Employee)
    private readonly userRepository: Repository<Employee>
  ) {
    super(userRepository);
  }
}
