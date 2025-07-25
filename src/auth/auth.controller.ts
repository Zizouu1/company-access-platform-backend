import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/login.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guards';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/dec/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post('register')
  register(@Body() Rdto: RegisterDto) {
    return this.authService.register(Rdto);
  }

  @Post('login')
  login(@Body() Ldto: LoginDto) {
    return this.authService.login(Ldto);
  }
}
