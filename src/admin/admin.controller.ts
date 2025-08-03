import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('upload-employees')
  @UseInterceptors(FileInterceptor('file'))
  async uploadEmployees(
    @UploadedFile() file: Express.Multer.File
  ): Promise<any> {
    return await this.adminService.importEmployeesFromCSV(file.path);
  }
}
