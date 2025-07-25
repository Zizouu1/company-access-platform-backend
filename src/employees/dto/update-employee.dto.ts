import { IsNumber, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsNumber()
  id: number;
  @IsString()
  fullname: string;
  @IsString()
  departement: string;
  @IsString()
  fonction: string;
}
