import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { Administrator } from './entity/administrator.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectRepository as InjectEmployeeRepo } from '@nestjs/typeorm';
import { Employee } from '../employees/entity/employee.entity';
import { CreateAdministratorDto } from './dto/administrator.dto';

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
  async create(data: CreateAdministratorDto): Promise<Administrator> {
    const { employeeId, dateR, time } = data;

    const employee = await this.employeeRepository.findOne({
      where: { id: employeeId },
    });
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    const formattedTime = time.length === 5 ? `${time}:00` : time;

    const admin = this.administratorRepository.create({
      dateR,
      time: formattedTime,
      employee,
    });

    return this.administratorRepository.save(admin);
  }

  async update(
    id: string,
    data: CreateAdministratorDto
  ): Promise<Administrator> {
    const { employeeId, dateR, time } = data;
    const formattedTime = time.length === 5 ? `${time}:00` : time;

    const admin = await this.administratorRepository.findOne({
      where: { id },
      relations: ['employee'],
    });
    if (!admin) throw new NotFoundException('Administrator record not found');

    if (employeeId) {
      const employee = await this.employeeRepository.findOne({
        where: { id: employeeId },
      });
      if (!employee) throw new NotFoundException('Employee not found');
      admin.employee = employee;
    }

    if (dateR) admin.dateR = dateR;
    if (time) admin.time = formattedTime;

    return this.administratorRepository.save(admin);
  }
  async findAll(): Promise<Administrator[]> {
    return this.administratorRepository.find({
      relations: ['employee'],
      order: { dateR: 'DESC', time: 'DESC' },
    });
  }
  async findOne(id: string): Promise<Administrator> {
    const admin = await this.administratorRepository.findOne({
      where: { id },
      relations: ['employee'],
    });
    if (!admin) throw new NotFoundException('Administrator not found');
    return admin;
  }
}
