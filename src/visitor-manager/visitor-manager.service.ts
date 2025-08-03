import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { Visitor } from './entity/visitor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class VisitorManagerService extends BaseService<Visitor> {
  constructor(
    @InjectRepository(Visitor)
    private readonly visitorRepository: Repository<Visitor>
  ) {
    super(visitorRepository);
  }
}
