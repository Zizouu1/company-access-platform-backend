import { IsDateString, IsString, IsNotEmpty, Matches } from 'class-validator';

export class CreateVisitorDto {
  @IsNotEmpty()
  @IsDateString()
  dateA: string;

  @IsNotEmpty()
  @Matches(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/, {
    message: 'Time must be in HH:MM or HH:MM:SS format',
  })
  time: string;

  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsString()
  matriculeV: string;

  @IsString()
  typeV: string;

  @IsString()
  aQui: string;
}
