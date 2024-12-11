import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NotiModule } from './noti/noti.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'admin',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'auth-consumer',
          },
        },
      },
      {
        name: 'BOOKMARK_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'admin',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'bookmark-consumerr',
          },
        },
      },
    ]),
    NotiModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
