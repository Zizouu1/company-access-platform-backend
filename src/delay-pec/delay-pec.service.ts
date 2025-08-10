import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectRepository as InjectEmployeeRepo } from '@nestjs/typeorm';
import { Employee } from '../employees/entity/employee.entity';
import { Delay } from './entity/delay-pec.entity';

@Injectable()
export class DelayPecService extends BaseService<Delay> {
  constructor(
    @InjectRepository(Delay)
    private readonly delayRepository: Repository<Delay>,
    @InjectEmployeeRepo(Employee)
    private readonly employeeRepository: Repository<Employee>
  ) {
    super(delayRepository);
  }
  async create(data: Partial<Delay>): Promise<Delay> {
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
