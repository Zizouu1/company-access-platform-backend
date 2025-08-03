import { IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  id: string;
  @IsString()
  fullname: string;
  @IsString()
  departement: string;
  @IsString()
  fonction: string;
}
