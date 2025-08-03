import { IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  id: string;
  @IsString()
  fullname: string;
  @IsString()
  departement: string;
  @IsString()
  fonction: string;
}
