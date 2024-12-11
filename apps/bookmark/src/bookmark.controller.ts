import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { GetUser, JwtGuard } from '@app/common';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get('me')
  getHello(@GetUser() user: any) {
    return user;
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Post('/create')
  createBookmark(@Body() data: CreateBookmarkDto, @GetUser() user: any) {
    const tempData = { ...data, userId: user._id };

    return this.bookmarkService.create(tempData);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get('/my')
  getMyBookmarks(@GetUser() user: any) {
    return this.bookmarkService.getMyBookmarks(user._id);
  }

  @MessagePattern('bookmark.getAll')
  getAllBookmarks() {
    return this.bookmarkService.getAllBookmarks();
  }
}
