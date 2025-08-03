import { Module } from '@nestjs/common';
import { FollowAdministratorService } from './follow-administrator.service';
import { FollowAdministratorController } from './follow-administrator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from './entity/administrator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Administrator])],
  providers: [FollowAdministratorService],
  controllers: [FollowAdministratorController],
})
export class FollowAdministratorModule {}
