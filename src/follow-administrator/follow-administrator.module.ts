import { Module } from '@nestjs/common';
import { FollowAdministratorService } from './follow-administrator.service';
import { FollowAdministratorController } from './follow-administrator.controller';

@Module({
  providers: [FollowAdministratorService],
  controllers: [FollowAdministratorController]
})
export class FollowAdministratorModule {}
