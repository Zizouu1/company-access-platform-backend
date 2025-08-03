import { IsDateString, IsMilitaryTime, IsString } from 'class-validator';

export class CreateVisitorDto {
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
