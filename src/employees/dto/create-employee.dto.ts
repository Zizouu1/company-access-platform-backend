import { IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsNumber()
  id: number;
  @IsString()
  fullname: string;
  @IsString()
  departement: string;
  @IsString()
  fonction: string;
}
