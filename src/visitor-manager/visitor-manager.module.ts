import { Module } from '@nestjs/common';
import { VisitorManagerController } from './visitor-manager.controller';
import { VisitorManagerService } from './visitor-manager.service';
import { Visitor } from './entity/visitor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Visitor])],
  controllers: [VisitorManagerController],
  providers: [VisitorManagerService],
})
export class VisitorManagerModule {}
