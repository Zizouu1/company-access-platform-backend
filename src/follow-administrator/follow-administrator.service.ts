import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { Administrator } from './entity/administrator.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FollowAdministratorService extends BaseService<Administrator> {
  constructor(
    @InjectRepository(Administrator)
    private readonly administratorRepository: Repository<Administrator>
  ) {
    super(administratorRepository);
  }
}
