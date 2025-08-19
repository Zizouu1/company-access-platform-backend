import { Module } from '@nestjs/common';
import { DelayPecController } from './delay-pec.controller';
import { DelayPecService } from './delay-pec.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Delay } from './entity/delay-pec.entity';
import { Employee } from '../employees/entity/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Delay, Employee])],
  controllers: [DelayPecController],
  providers: [DelayPecService],
})
export class DelayPecModule {}
