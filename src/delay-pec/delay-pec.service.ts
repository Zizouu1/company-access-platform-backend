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
import { CreateDelayDto } from './dto/delay-pec.dto';

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
  async update(id: string, data: CreateDelayDto): Promise<Delay> {
    const { employeeId, dateR, time, service } = data;
    const formattedTime = time.length === 5 ? `${time}:00` : time;
    const delay = await this.delayRepository.findOne({
      where: { id },
      relations: ['employee'],
    });
    if (!delay) {
      throw new NotFoundException('Delay record not found');
    }
    if (employeeId) {
      const employee = await this.employeeRepository.findOne({
        where: { id: employeeId },
      });
      if (!employee) {
        throw new NotFoundException('Employee not found');
      }
      delay.employee = employee;
    }
    if (dateR) delay.dateR = dateR;
    if (time) delay.time = formattedTime;
    if (service) delay.service = service;
    return this.delayRepository.save(delay);
  }
  async findAll(): Promise<Delay[]> {
    return this.delayRepository.find({
      relations: ['employee'],
      order: { dateR: 'DESC', time: 'DESC' },
    });
  }
  async findOne(id: string): Promise<Delay> {
    const delay = await this.delayRepository.findOne({
      where: { id },
      relations: ['employee'],
    });
    if (!delay) {
      throw new NotFoundException('Delay record not found');
    }
    return delay;
  }
}
