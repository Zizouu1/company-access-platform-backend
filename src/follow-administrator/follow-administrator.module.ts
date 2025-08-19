import { Module } from '@nestjs/common';
import { FollowAdministratorService } from './follow-administrator.service';
import { FollowAdministratorController } from './follow-administrator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from './entity/administrator.entity';
import { Employee } from 'src/employees/entity/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Administrator, Employee])],
  providers: [FollowAdministratorService],
  controllers: [FollowAdministratorController],
})
export class FollowAdministratorModule {}
