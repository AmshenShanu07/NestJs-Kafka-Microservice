import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AdminService implements OnModuleInit {
  constructor(
    @Inject('AUTH_SERVICE') private authService: ClientKafka,
    @Inject('BOOKMARK_SERVICE') private bookmarkService: ClientKafka,
  ) {}

  onModuleInit() {
    this.authService.subscribeToResponseOf('auth.allUsers');
    this.bookmarkService.subscribeToResponseOf('bookmark.getAll');
    this.authService.connect();
    this.bookmarkService.connect();
  }

  getAllUsers() {
    return this.authService.send('auth.allUsers', {}).toPromise();
  }

  getAllBookmarks() {
    return this.bookmarkService.send('bookmark.getAll', {}).toPromise();
  }
}
