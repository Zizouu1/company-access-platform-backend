import { IsDateString, IsMilitaryTime, IsString } from 'class-validator';

export class CreateDelayDto {
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

  @IsString()
  service: string;
}
