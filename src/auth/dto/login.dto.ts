import { IsString } from 'class-validator';
import { Role } from 'src/common/roles.enum';
export class LoginDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
}
export class RegisterDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
  role?: Role;
}
