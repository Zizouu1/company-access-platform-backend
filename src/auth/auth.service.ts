import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async validateUser(authDto: LoginDto) {
    const findUser = await this.UserRepository.findOneBy({
      username: authDto.username,
    });
    if (
      findUser &&
      (await bcrypt.compare(authDto.password, findUser.password))
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = findUser;
      return result;
    }
    return null;
  }
  async register(authDto: RegisterDto) {
    const { id, username, password, role } = authDto;
    const existingUser = await this.UserRepository.findOneBy({
      username: authDto.username,
    });
    if (existingUser) {
      throw new Error('User already exists');
    }
    const user = this.UserRepository.create({
      id,
      username,
      password,
      role,
    });
    await this.UserRepository.save(user);

    return { message: 'User registered successfully' };
  }
  async login(authDto: LoginDto) {
    const user = await this.validateUser(authDto);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const payload = {
      username: user.username,
      sub: user.id,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
      role: user.role,
    };
  }
}
