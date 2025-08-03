import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { VisitorManagerModule } from './visitor-manager/visitor-manager.module';
import { FollowAdministratorModule } from './follow-administrator/follow-administrator.module';
import { DelayPecModule } from './delay-pec/delay-pec.module';
import { DelayPecAcModule } from './delay-pec-ac/delay-pec-ac.module';
import { DelayPecPlusModule } from './delay-pec-plus/delay-pec-plus.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: +config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    AuthModule,
    UsersModule,
    EmployeesModule,
    VisitorManagerModule,
    FollowAdministratorModule,
    DelayPecModule,
    DelayPecAcModule,
    DelayPecPlusModule,
    AdminModule,
  ],
})
export class AppModule {}
