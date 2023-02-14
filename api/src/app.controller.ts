import { Controller, Get } from '@nestjs/common';
import { TwilioService } from 'nestjs-twilio';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly twilioService: TwilioService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send-sms')
  sendText(): void {
    setTimeout(() => {
      return this.twilioService.client.messages.create({
        body: 'Signed up for Kicking Boxing @ 9:00AM 1/28/2023',
        from: '+18556438569',
        to: '+18168103296',
      });
    }, 30000);
  }
}
