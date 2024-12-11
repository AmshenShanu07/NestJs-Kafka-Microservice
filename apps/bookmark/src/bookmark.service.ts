import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bookmark } from './bookmark.schema';
import { Model } from 'mongoose';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectModel(Bookmark.name) private bookmarkModel: Model<Bookmark>,
  ) {}

  getHello() {
    return 'Hello World';
  }

  create(data: CreateBookmarkDto) {
    const newBookmark = new this.bookmarkModel({
      title: data.title,
      url: data.url,
      description: data.description,
      userId: data.userId,
    });

    return newBookmark.save();
  }

  getMyBookmarks(userId: string) {
    return this.bookmarkModel.find({ userId: userId });
  }

  getAllBookmarks() {
    return this.bookmarkModel.find({});
  }
}
