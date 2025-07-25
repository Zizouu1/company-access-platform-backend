import { Module } from '@nestjs/common';
import { VisitorManagerController } from './visitor-manager.controller';
import { VisitorManagerService } from './visitor-manager.service';

@Module({
  controllers: [VisitorManagerController],
  providers: [VisitorManagerService]
})
export class VisitorManagerModule {}
