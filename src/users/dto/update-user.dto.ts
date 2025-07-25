import { IsString } from 'class-validator';
import { Role } from 'src/common/roles.enum';
export class UpdateUserDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
  role?: Role;
}
