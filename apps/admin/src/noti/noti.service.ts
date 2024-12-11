import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class NotiService {
  constructor(
    @Inject('NOTIFICATION_SERVICE')
    private readonly notificationService: ClientKafka,
  ) {}

  sendWhatsAppNotification() {
    this.notificationService.emit('notification.whatsapp', {});
    return { message: 'Notification Send Successfully' };
  }
  sendSmsNotification() {
    this.notificationService.emit('notification.sms', {});
    return { message: 'Notification Send Successfully' };
  }
  sendEmailNotification() {
    this.notificationService.emit('notification.email', {});
    return { message: 'Notification Send Successfully' };
  }
}
