import { IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  id: string;
  @IsString()
  nom: string;
  @IsString()
  prenom: string;
  @IsString()
  site: string;
}
