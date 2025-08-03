import { IsDateString, IsMilitaryTime, IsString } from 'class-validator';

export class CreateAdministratorDto {
  @IsDateString()
  dateR: string;

  @IsMilitaryTime()
  time: string;

  @IsString()
  id: string;

  @IsString()
  nom: string;

  @IsString()
  prenom: string;

  @IsString()
  site: string;
}
