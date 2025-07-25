import { Module } from '@nestjs/common';
import { DelayPecController } from './delay-pec.controller';
import { DelayPecService } from './delay-pec.service';

@Module({
  controllers: [DelayPecController],
  providers: [DelayPecService]
})
export class DelayPecModule {}
