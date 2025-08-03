import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Employee } from '../employees/entity/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
