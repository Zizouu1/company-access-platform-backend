import { IsDateString, Matches, IsNotEmpty, IsString } from 'class-validator';

export class CreateAdministratorDto {
  @IsNotEmpty()
  @IsDateString()
  dateR: string;

  @IsNotEmpty()
  @Matches(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/, {
    message: 'Time must be in HH:MM or HH:MM:SS format',
  })
  time: string;

  @IsNotEmpty()
  @IsString()
  employeeId: string;
}
