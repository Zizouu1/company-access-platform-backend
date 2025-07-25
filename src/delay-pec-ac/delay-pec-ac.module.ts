import { Module } from '@nestjs/common';
import { DelayPecAcService } from './delay-pec-ac.service';
import { DelayPecAcController } from './delay-pec-ac.controller';

@Module({
  providers: [DelayPecAcService],
  controllers: [DelayPecAcController]
})
export class DelayPecAcModule {}
