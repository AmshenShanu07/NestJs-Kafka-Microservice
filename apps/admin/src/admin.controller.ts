import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('/users')
  getAllUsers() {
    return this.adminService.getAllUsers();
  }

  @Get('/bookmarks')
  getAllBookmarks() {
    return this.adminService.getAllBookmarks();
  }
}
