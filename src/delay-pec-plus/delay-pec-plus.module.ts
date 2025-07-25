import { Module } from '@nestjs/common';
import { DelayPecPlusController } from './delay-pec-plus.controller';
import { DelayPecPlusService } from './delay-pec-plus.service';

@Module({
  controllers: [DelayPecPlusController],
  providers: [DelayPecPlusService]
})
export class DelayPecPlusModule {}
