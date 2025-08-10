import {
  IsDateString,
  IsMilitaryTime,
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class CreateAdministratorDto {
  @IsNotEmpty()
  @IsDateString()
  dateR: string;

  @IsNotEmpty()
  @IsMilitaryTime()
  time: string;

  @IsNotEmpty()
  @IsString()
  employee_id: string;
}
