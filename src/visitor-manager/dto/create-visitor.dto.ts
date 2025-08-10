import { IsDateString, IsMilitaryTime, IsString } from 'class-validator';

export class CreateVisitorDto {
  @IsDateString()
  dateA: string;

  @IsMilitaryTime()
  time: string;

  @IsString()
  id: string;

  @IsString()
  fullname: string;

  @IsString()
  matriculeV: string;

  @IsString()
  typeV: string;

  @IsString()
  aQui: string;
}
