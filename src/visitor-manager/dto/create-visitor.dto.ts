import { IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateVisitorDto {
  @Type(() => Date)
  @IsDate()
  date: Date;

  @IsString()
  cin: string;

  @IsString()
  fullname: string;

  @IsString()
  matriculeV: string;

  @IsString()
  typeV: string;

  @IsString()
  aQui: string;
}
