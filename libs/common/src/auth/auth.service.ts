import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthServiceCommon implements OnModuleInit {
  constructor(@Inject('AUTH_SERVICE') private authService: ClientKafka) {}

  onModuleInit() {
    this.authService.subscribeToResponseOf('auth.userByEmail');
  }

  async getUserByEmail(email: string) {
    const userData = await this.authService
      .send('auth.userByEmail', email)
      .toPromise();

    return userData;
  }
}
