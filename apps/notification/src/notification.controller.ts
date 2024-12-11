import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @EventPattern('notification.whatsapp')
  sendWhatsAppNotification() {
    this.notificationService.sendWhatsAppNotification();
  }

  @EventPattern('notification.sms')
  sendSmsNotification() {
    this.notificationService.sendSmsNotification();
  }

  @EventPattern('notification.email')
  sendEmailNotification() {
    this.notificationService.sendEmailNotification();
  }
}
