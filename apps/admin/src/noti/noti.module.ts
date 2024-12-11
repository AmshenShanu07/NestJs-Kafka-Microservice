import { Module } from '@nestjs/common';
import { NotiService } from './noti.service';
import { NotiController } from './noti.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'admin',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'notification-consumerr',
          },
        },
      },
    ]),
  ],
  controllers: [NotiController],
  providers: [NotiService],
})
export class NotiModule {}
