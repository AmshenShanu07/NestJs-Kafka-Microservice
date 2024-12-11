import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  sendWhatsAppNotification() {
    console.log('this is a whatsapp message');
  }

  sendSmsNotification() {
    console.log('this is a Sms');
  }

  sendEmailNotification() {
    console.log('this is a Email');
  }
}
