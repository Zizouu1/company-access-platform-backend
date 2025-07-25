import { IsString } from 'class-validator';
import { Role } from 'src/common/roles.enum';
export class CreateUserDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
  role?: Role;
}
