import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }
  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User | null> {
    return await this.usersService.findOne(id);
  }
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.usersService.remove(id);
  }
}
