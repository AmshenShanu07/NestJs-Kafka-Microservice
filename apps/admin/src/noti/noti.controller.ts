import { Controller, Get } from '@nestjs/common';
import { NotiService } from './noti.service';

@Controller('noti')
export class NotiController {
  constructor(private readonly notiService: NotiService) {}

  @Get('whatsapp')
  sendWhatsAppNotification() {
    return this.notiService.sendWhatsAppNotification();
  }

  @Get('sms')
  sendSmsNotification() {
    return this.notiService.sendSmsNotification();
  }

  @Get('email')
  sendEmailNotification() {
    return this.notiService.sendEmailNotification();
  }
}
