import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { Administrator } from './entity/administrator.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectRepository as InjectEmployeeRepo } from '@nestjs/typeorm';
import { Employee } from '../employees/entity/employee.entity';

@Injectable()
export class FollowAdministratorService extends BaseService<Administrator> {
  constructor(
    @InjectRepository(Administrator)
    private readonly administratorRepository: Repository<Administrator>,
    @InjectEmployeeRepo(Employee)
    private readonly employeeRepository: Repository<Employee>
  ) {
    super(administratorRepository);
  }
  async create(data: Partial<Administrator>): Promise<Administrator> {
    const employeeId: string =
      data.employee?.id || (data as { employee_id: string }).employee_id;
    if (!employeeId) {
      throw new BadRequestException('employee_id is required');
    }

    const employee = await this.employeeRepository.findOne({
      where: { id: employeeId },
    });
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    data.employee = employee;
    return super.create(data);
  }
}
