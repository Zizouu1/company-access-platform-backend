import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { Delay } from './entity/delay-pec.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DelayPecService extends BaseService<Delay> {
  constructor(
    @InjectRepository(Delay)
    private readonly delayRepository: Repository<Delay>
  ) {
    super(delayRepository);
  }
}
